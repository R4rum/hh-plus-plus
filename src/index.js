import {
    BoosterStatusCollector,
    ClubStatusCollector,
    EventVillainsCollector,
    GirlDictionaryCollector,
    LeagueInfoCollector,
    MarketInfoCollector,
    SeasonStatsCollector,
    SidequestStatusCollector,
    TeamsCollector,
    TimerCollector
} from './collectors'
import Helpers from './common/Helpers'
import Config from './config'
import {
    AutoRefreshModule,
    BattleEndstateModule,
    BattleSimulatorModule,
    BlessingSpreadsheetLinkModule,
    ChampionsModule,
    ContestRewardsModule,
    DisableDragDropModule,
    FightAVillainModule,
    GemStockModule,
    GirlSalaryTimersStyleTweak,
    HaremInfoModule,
    HideClaimedRewardsModule,
    HideRotateDeviceStyleTweak,
    HomeScreenIconsModule,
    HomeScreenModule,
    HomeScreenOldishModule,
    HomeScreenOrderModule,
    HomeScreenRightSideRearrangeStyleTweak,
    LeaderboardFixModule,
    LeagueInfoModule,
    MarketEquipsFilterModule,
    MarketGirlsFilterModule,
    MarketHideSellButtonModule,
    MarketInfoModule,
    MarketXPAffModule,
    MissionsBackgroundStyleTweak,
    MobileBattleStyleTweak,
    MobileLeagueDarkBackgroundStyleTweak,
    MoneyAnimationStyleTweak,
    MoveSkipButtonStyleTweak,
    PachinkoNamesModule,
    PopClassFilterModule,
    PopNavSortModule,
    PoseAspectRatioStyleTweak,
    ReduceHomeScreenBlurStyleTweak,
    ReloadFrameModule,
    ResourceBarsModule,
    RewardShardsModule,
    SeasonStatsModule,
    StaticBackgroundModule,
    TeamsFilterModule,
    VillainBreadcrumbsModule
} from './modules'

const runScript = () => {
    const config = new Config()

    // base modules
    GirlDictionaryCollector.collect()
    TeamsCollector.collect()
    EventVillainsCollector.collect()
    SeasonStatsCollector.collect()
    MarketInfoCollector.collect()
    LeagueInfoCollector.collect()
    TimerCollector.collect()
    BoosterStatusCollector.collect()
    ClubStatusCollector.collect()
    SidequestStatusCollector.collect()

    // configurable modules

    // core
    config.registerGroup({
        key: 'core',
        name: `${Helpers.getGameKey()}++ Core`
    })
    config.registerModule(new FightAVillainModule())
    config.registerModule(new MarketInfoModule())
    config.registerModule(new MarketGirlsFilterModule())
    config.registerModule(new MarketEquipsFilterModule())
    config.registerModule(new MarketXPAffModule())
    config.registerModule(new MarketHideSellButtonModule())
    config.registerModule(new HaremInfoModule())
    config.registerModule(new LeagueInfoModule())
    config.registerModule(new BattleSimulatorModule())
    config.registerModule(new TeamsFilterModule())
    config.registerModule(new ChampionsModule())
    config.registerModule(new ReloadFrameModule())
    config.registerModule(new ResourceBarsModule())
    config.registerModule(new HomeScreenModule())
    config.registerModule(new PopNavSortModule())
    config.registerModule(new PopClassFilterModule())
    config.registerModule(new SeasonStatsModule())
    config.registerModule(new PachinkoNamesModule())
    config.registerModule(new ContestRewardsModule())
    config.registerModule(new BattleEndstateModule())
    config.registerModule(new GemStockModule())
    config.registerModule(new StaticBackgroundModule())
    config.registerModule(new RewardShardsModule())
    config.registerModule(new LeaderboardFixModule())
    config.registerModule(new HideClaimedRewardsModule())
    config.registerModule(new DisableDragDropModule())
    config.registerModule(new AutoRefreshModule())
    config.registerModule(new VillainBreadcrumbsModule())
    config.registerModule(new BlessingSpreadsheetLinkModule())
    config.registerModule(new HomeScreenIconsModule())
    config.registerModule(new HomeScreenOrderModule())
    config.registerModule(new HomeScreenOldishModule())

    // style tweaks
    config.registerGroup({
        key: 'st',
        name: 'Style Tweaks',
        iconEl: '<div></div>'
    })
    config.registerModule(new MissionsBackgroundStyleTweak())
    config.registerModule(new MoneyAnimationStyleTweak())
    config.registerModule(new MobileBattleStyleTweak())
    config.registerModule(new MobileLeagueDarkBackgroundStyleTweak())
    config.registerModule(new HideRotateDeviceStyleTweak())
    if (Helpers.isCxH()) {
        config.registerModule(new GirlSalaryTimersStyleTweak())
    }
    config.registerModule(new MoveSkipButtonStyleTweak())
    config.registerModule(new PoseAspectRatioStyleTweak())
    config.registerModule(new ReduceHomeScreenBlurStyleTweak())
    config.registerModule(new HomeScreenRightSideRearrangeStyleTweak())

    config.loadConfig()

    config.runModules()

    Helpers.runDeferred()

    // expose config for other scripts to register their own modules
    window.hhPlusPlusConfig = {
        registerGroup: config.registerGroup.bind(config),
        registerModule: config.registerModule.bind(config),
        runModules: config.runModules.bind(config),
        loadConfig: config.loadConfig.bind(config),
    }
}

if (!$) {
    console.log('HH++ WARNING: No jQuery found. Probably an error page. Ending the script here')
} else if (location.pathname === '/' && (location.hostname.includes('www') || location.hostname.includes('test'))) {
    // iframe container, do nothing.
} else if (location.pathname === '/integrations/' && location.hostname.includes('nutaku')) {
    // nutaku post-login home screen, redirect.
    location.replace(`${location.origin}/home.html`)
} else {
    runScript()
}
