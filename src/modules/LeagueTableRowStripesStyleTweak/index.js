import STModule from '../STModule'
import Helpers from '../../common/Helpers'
import I18n from '../../i18n'
import Sheet from '../../common/Sheet'

import styles from './styles.lazy.scss'

const MODULE_KEY = 'leagueTableRowStripes'

const TABLE_ROW = {
    HH: 'rgba(191,40,90,.25)',
    GH: 'rgba(191,40,90,.25)',
    CxH: 'rgba(36,88,255,.25)',
}

class LeagueTableRowStripesStyleTweak extends STModule {
    constructor () {
        const configSchema = ({
            baseKey: MODULE_KEY,
            label: I18n.getModuleLabel('stConfig', MODULE_KEY),
            default: true
        })
        super({
            configSchema,
            styles
        })
    }

    shouldRun () {
        return Helpers.isCurrentPage('tower-of-fame')
    }

    run () {
        super.run()
        Helpers.defer(() => {
            this.injectCSSVars()
        })
    }

    injectCSSVars() {
        const tableRow = TABLE_ROW[Helpers.getGameKey()] || TABLE_ROW.HH
        Sheet.registerVar('table-row-color', tableRow)
    }
}

export default LeagueTableRowStripesStyleTweak
