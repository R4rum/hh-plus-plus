import CoreModule from '../CoreModule'
import Helpers from '../../common/Helpers'
import I18n from '../../i18n'

import styles from './styles.lazy.scss'

const MODULE_KEY = 'homeScreenHideFluff'

class HomeScreenHideFluffModule extends CoreModule {
    constructor () {
        super({
            baseKey: MODULE_KEY,
            label: I18n.getModuleLabel('config', MODULE_KEY),
            default: true
        })
        this.label = I18n.getModuleLabel.bind(this, MODULE_KEY)
    }

    shouldRun () {
        return Helpers.isCurrentPage('home.html')
    }

    run () {
        if (this.hasRun || !this.shouldRun()) {return}

        styles.use()

        this.hasRun = true
    }
}

export default HomeScreenHideFluffModule
