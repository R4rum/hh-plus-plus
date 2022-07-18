import CoreModule from '../CoreModule'
import Helpers from '../../common/Helpers'
import I18n from '../../i18n'

import styles from './styles.lazy.scss'
import Sheet from '../../common/Sheet'

const {$} = Helpers
const MODULE_KEY = 'popClassFilter'

const createFilterBtn = (className) => {
    return $('<label class="' + className + '"><input type="button" class="blue_button_L" value="" /></label>')
}

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

    applyFilter (currentPoPId, wanted_class) {
        if (!currentPoPId) {return}

        const {pop_data, pop_hero_girls} = window

        const currentPoP = pop_data[currentPoPId]
        const {status, girls} = currentPoP
        const $girlsContainer = $('.pop_right_part .grid_view')

        girls.forEach(({id_girl}) => {
            const $girl = $girlsContainer.find(`[girl=${id_girl}]`)
            $girl.removeClass('filtered_out')
        })

        if (wanted_class == 0)  wanted_class = currentPoP.class;

        if (status !== 'can_start') {return}

        if (wanted_class >= 0) {
            girls.forEach(({id_girl}) => {
                const {class: carac} = pop_hero_girls[id_girl]

                if (carac != wanted_class) {
                    const $girl = $girlsContainer.find(`[girl=${id_girl}]`)
                    $girl.addClass('filtered_out')
                }
            })
        }
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
                    this.injectCSSVars()
                    const $container = $('.pop_right_part .grid_view')
                    const $no_btn = createFilterBtn("no_filter")
                    const $hc_btn = createFilterBtn("hc_filter")
                    const $ch_btn = createFilterBtn("ch_filter")
                    const $kh_btn = createFilterBtn("kh_filter")
                    $container.append($no_btn).append($hc_btn).append($ch_btn).append($kh_btn)
                    $no_btn.click(() => this.applyFilter(currentPoPId, -1))
                    $hc_btn.click(() => this.applyFilter(currentPoPId, 1))
                    $ch_btn.click(() => this.applyFilter(currentPoPId, 2))
                    $kh_btn.click(() => this.applyFilter(currentPoPId, 3))

                    this.applyFilter(currentPoPId, 0)

                    new MutationObserver(() => {
                        this.applyFilter(currentPoPId, 0)
                    }).observe($('.pop_right_part .grid_view')[0], {childList: true})

                    // Catch any button press, because hacky tweaks.
                    $(document).click(function(){
                        const $container = $('.pop_right_part .grid_view')
                        $container.getNiceScroll().resize()
                    }); 
                }
            }
        })

        this.hasRun = true
    }

    injectCSSVars() {
        Sheet.registerVar('no-icon', `url('${Helpers.getCDNHost()}/pictures/misc/items_icons/16.svg')`)
        Sheet.registerVar('hc-icon', `url('${Helpers.getCDNHost()}/pictures/misc/items_icons/1.svg')`)
        Sheet.registerVar('ch-icon', `url('${Helpers.getCDNHost()}/pictures/misc/items_icons/2.svg')`)
        Sheet.registerVar('kh-icon', `url('${Helpers.getCDNHost()}/pictures/misc/items_icons/3.svg')`)
    }
}

export default PopClassFilterModule
