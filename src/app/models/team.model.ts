export interface GroupedTeams {
    [key: string]: Team[]
}

export interface Team {
    Active: boolean
    City: string
    Conference: string
    Division: string
    GlobalTeamID: number
    HeadCoach: string
    Key: string
    LeagueID: number
    Name: string
    NbaDotComTeamID: number
    PrimaryColor: string
    QuaternaryColor: string
    SecondaryColor: string
    StadiumID: number
    TeamID: number
    TertiaryColor: string
    WikipediaLogoUrl: string
}