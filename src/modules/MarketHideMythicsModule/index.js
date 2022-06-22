import CoreModule from '../CoreModule'
import Helpers from '../../common/Helpers'
import I18n from '../../i18n'
import { lsKeys } from '../../common/Constants'

import styles from './styles.lazy.scss'

const {$} = Helpers
const MODULE_KEY = 'marketHideMythics'

class MarketHideMythicsModule extends CoreModule {
    constructor () {
        super({
            baseKey: MODULE_KEY,
            label: I18n.getModuleLabel('config', MODULE_KEY),
            default: false
        })
        this.label = I18n.getModuleLabel.bind(this, MODULE_KEY)
    }

    shouldRun () {
        return Helpers.isCurrentPage('shop')
    }

    run () {
        if (!this.shouldRun()) {return}

        Helpers.defer(() => {
            const destroy = () => {
                $('#shops_left>#shop>.gift>.mythic.slot').replaceWith(`<div class="slot empty"></div>`) 
                $('#shops_left>#shop>.potion>.mythic.slot').replaceWith(`<div class="slot empty"></div>`) 
            }
            destroy()
            new MutationObserver(destroy).observe(document.getElementById('shops'), {attributes: true, attributeFilter:['class'], subtree: true})
        })
    }
}

export default MarketHideMythicsModule
