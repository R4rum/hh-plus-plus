import CoreModule from '../CoreModule'
import Helpers from '../../common/Helpers'
import I18n from '../../i18n'

import styles from './styles.lazy.scss'
import Sheet from '../../common/Sheet'

const {$} = Helpers
const MODULE_KEY = 'reloadFrameButton'

// Original code by Rarum
class ReloadFrameModule extends CoreModule {
    constructor () {
        super({
            baseKey: MODULE_KEY,
            label: I18n.getModuleLabel('config', MODULE_KEY),
            default: true
        })
        this.label = I18n.getModuleLabel.bind(this, MODULE_KEY)
    }

    shouldRun () {
        return Helpers.isCurrentPage('activities')
    }

    run () {
        if (this.hasRun || !this.shouldRun()) {return}

        styles.use()

        Helpers.defer(() => {
            var button_holder = document.createElement("DIV");
            button_holder.innerHTML = '<input type="button" onclick="window.location.reload()" value="&#8635;" id="ReloadFrame" style="font-size:150%;" title="Refresh Contest Leaderboard" />';
            $(".base_block").append(button_holder);
        })

        this.hasRun = true
    }
}

export default ReloadFrameModule
