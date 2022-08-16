export const colors = {
    HH: {
        homeDark: 'rgba(32,3,7,.9)',
        homeBorder: '#ffb827',
        panelBorderGradient: 'linear-gradient(180deg, #ffa23e, #c41b53)',
        panelBackground: 'linear-gradient(to top,#572332 0,#572332 1%,#2c1e1c 100%)',
        panelInset: 'inset 0 0 40px 15px #662034'
    },
    GH: {
        homeDark: 'rgba(32,3,7,.9)',
        homeBorder: '#69daff',
        panelBorderGradient: 'linear-gradient(180deg,#6a8cff,#8966ff)',
        panelBackground: 'linear-gradient(to top,#84a 0,#2a2435 99%,#2a2435 100%)',
        panelInset: 'inset 0 0 40px 15px rgb(131 55 245 / 60%)'
    },
    CxH: {
        homeDark: '#0f0b1d',
        homeBorder: '#33a7ff',
        panelBorderGradient: 'linear-gradient(180deg, #33a7ff, #33a7ff)',
        panelBackground: 'linear-gradient(180deg,#0f0b1d 0,#0d5c9d 90%,#0d5c9d 100%)',
        panelInset: 'inset 0 0 40px 15px none'
    },
    PSH: {
        homeDark: 'rgba(32,3,7,.9)',
        homeBorder: '#ffb827',
        panelBorderGradient: 'linear-gradient(180deg, #ffa23e, #c41b53)',
        panelBackground: 'linear-gradient(to top,#572332 0,#572332 1%,#2c1e1c 100%)',
        panelInset: 'inset 0 0 40px 15px #662034'
    },
    HoH: {
        homeDark: 'rgba(32,3,7,.9)',
        homeBorder: '#ffb827',
        panelBorderGradient: 'linear-gradient(180deg, #ffa23e, #c41b53)',
        panelBackground: 'linear-gradient(to top,#572332 0,#572332 1%,#2c1e1c 100%)',
        panelInset: 'inset 0 0 40px 15px #662034'
    },
}

const lsBaseKey = 'HHPlusPlus'
const lsKey = (key) => `${lsBaseKey}${key}`
export const lsKeys = {
    CONFIG:                     lsKey('Config'),
    GIRL_DICTIONARY:            lsKey('GirlDictionary'),
    TEAMS_DICTIONARY:           lsKey('TeamsDictionary'),
    EVENT_VILLAINS:             lsKey('EventVillains'),
    EVENT_TIME:                 lsKey('EventTime'),
    MYTHIC_EVENT_VILLAINS:      lsKey('MythicEventVillains'),
    MYTHIC_EVENT_TIME:          lsKey('MythicEventTime'),
    SEASON_END_TIME:            lsKey('SeasonEndTime'),
    SEASON_STATS:               lsKey('SeasonStats'),
    OLD_SEASON_STATS:           lsKey('OldSeasonStats'),
    MARKET_INFO:                lsKey('MarketInfo'),
    MARKET_GIRLS_FILTER:        lsKey('ActiveMarketGirlFilter'),
    EQUIP_FAVORITES:            lsKey('EquipFavorites'),
    SELL_BUTTON_HIDDEN:         lsKey('SellButtonHidden'),
    LEAGUE_PLAYERS:             lsKey('LeaguePlayers'),
    LEAGUE_POINT_HISTORY:       lsKey('LeaguePointHistory'),
    LEAGUE_RESULTS:             lsKey('LeagueResults'),
    LEAGUE_SCORE:               lsKey('LeagueScore'),
    LEAGUE_TIME:                lsKey('LeagueTime'),
    LEAGUE_UNKNOWN:             lsKey('LeagueUnknown'),
    LEAGUE_PLAYERS_OLD:         lsKey('LeaguePlayersOld'),
    LEAGUE_POINT_HISTORY_OLD:   lsKey('LeaguePointHistoryOld'),
    LEAGUE_RESULTS_OLD:         lsKey('LeagueResultsOld'),
    LEAGUE_SCORE_OLD:           lsKey('LeagueScoreOld'),
    LEAGUE_TIME_OLD:            lsKey('LeagueTimeOld'),
    LEAGUE_UNKNOWN_OLD:         lsKey('LeagueUnknownOld'),
    FOUGHT_OPPONENTS_HIDDEN:    lsKey('FoughtOpponentsHidden'),
    TABLE_SHOW_INDIVIDUAL:      lsKey('TableShowIndividual'),
    TRACKED_TIMES:              lsKey('TrackedTimes'),
    BOOSTER_STATUS:             lsKey('BoosterStatus'),
    CLUB_STATUS:                lsKey('ClubStatus'),
    AVAILABLE_FEATURES:         lsKey('AvailableFeatures'),
    SIDEQUEST_STATUS:           lsKey('SidequestStatus'),
    PATH_TIME_POV:              lsKey('PathTimePoV'),
    PATH_TIME_POG:              lsKey('PathTimePoG'),
}
