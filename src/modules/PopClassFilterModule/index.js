import CoreModule from '../CoreModule'
import Helpers from '../../common/Helpers'
import I18n from '../../i18n'
import filterIcon from '../../assets/filter.svg'
import { lsKeys } from '../../common/Constants'

import styles from './styles.lazy.scss'
import Sheet from '../../common/Sheet'

const {$} = Helpers
const MODULE_KEY = 'popClassFilter'

// Original code by Rarum
class PopClassFilterModule extends CoreModule {
    constructor () {
        super({
            baseKey: MODULE_KEY,
            label: I18n.getModuleLabel('config', MODULE_KEY),
            default: true
        })
        this.label = I18n.getModuleLabel.bind(this, MODULE_KEY)

    }

    applyFilter (currentPoPId) {
        if (!currentPoPId) {return}

        const {pop_data, pop_hero_girls} = window

        const currentPoP = pop_data[currentPoPId]
        const {status, girls} = currentPoP
        const wanted_class = currentPoP.class

        if (status !== 'can_start') {return}

        const $girlsContainer = $('.pop_right_part .grid_view')

        girls.forEach(({id_girl}) => {
            const {class: carac} = pop_hero_girls[id_girl]

            if (carac != wanted_class) {
                const $girl = $girlsContainer.find(`[girl=${id_girl}]`)
                $girl.addClass('filtered_out')
            }
        })
    }

    shouldRun () {
        return Helpers.isCurrentPage('activities')
    }

    run () {
        if (this.hasRun || !this.shouldRun()) {return}

        styles.use()

        Helpers.defer(() => {
            if (window.pop_data) {
                const {location} = window
                const searchParams = new URLSearchParams(location.search)
                const currentPoPId = searchParams.get('index')

                if (currentPoPId) {
                    this.applyFilter(currentPoPId)

                    new MutationObserver(() => {
                        this.applyFilter(currentPoPId)
                    }).observe($('.pop_right_part .grid_view')[0], {childList: true})
                }
            }
        })

        this.hasRun = true
    }
}

export default PopClassFilterModule
