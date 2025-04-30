import { teamNames, teamResults, teamPlayed, getWinner, teamScore, teamsScores, rankTeams } from '../league'

describe("league", () => {
    let matches;

    beforeEach(() => {
        matches = [
            {
                home: "Man City",
                away: "Chelsea",
                score: [0, 1]
            },
            {
                home: "Chelsea",
                away: "Liverpool",
                score: [3, 1]
            },
            {
                home: "Liverpool",
                away: "Newcastle",
                score: [1, 1]
            },
            {
                home: "Newcastle",
                away: "Man City",
                score: [2, 0]
            },
            {
                home: "Man City",
                away: "Liverpool",
                score: [1, 1]
            },
            {
                home: "Chelsea",
                away: "Newcastle",
                score: [0, 0]
            }
            
        ]
    })

    describe("teamNames", () => {
        it("should return an array of the league's team names", () => {
            const teams = ["Man City", "Chelsea", "Liverpool", "Newcastle"]
            const result = teamNames(matches)

            expect(result).toStrictEqual(teams)
        })
    })

    describe("getWinner", () => {
        it("should return the winning team name given a match", () => {
            const match = matches[0]
            const result = getWinner(match)
    
            expect(result).toBe("Chelsea")
        })
    
        it("should return 'NONE' if match is a draw", () => {
            const match = matches[2]
            const result = getWinner(match)
    
            expect(result).toBe("NONE")
        })
    })

    describe("teamPlayed", () => {
        it("should return true if a team played in a match", () => {
            const result = teamPlayed("Chelsea", matches[0])
    
            expect(result).toBe(true)
        })
    
        it("should return false if a team did not play in a match", () => {
            const result = teamPlayed("Chelsea", matches[2])
    
            expect(result).toBe(false)
        })
    })

    describe("teamResults", () => {
        it("should return wins, draws and losses for a team - wins & draws", () => {
            const chelsea = {win: 2, draw: 1, lose: 0}
    
            const chelseaResult = teamResults(matches, "Chelsea")
    
            expect(chelseaResult).toStrictEqual(chelsea)
        })

        it("should return wins, draws and losses for a team - draws & losses", () => {
            const liverpool = {win: 0, draw: 2, lose: 1}
    
            const liverpoolResult = teamResults(matches, "Liverpool")
    
            expect(liverpoolResult).toStrictEqual(liverpool)
        })
    })

   describe("teamScore", () => {
        // A team gets:
        // - 3 points for a win
        // - 1 point for a draw
        // - 0 points for a loss

        it("should get a team's score for league - wins and draws", () => {
            const newcastleResults = {
                win: 1,
                draw: 2,
                loss: 0
            }
    
            const newcastleScore = teamScore(newcastleResults)
    
            expect(newcastleScore).toBe(5)
        })

        it("should get a team's score for a league - draws and losses", () => {
            const manCityResults = {
                win: 0,
                draw: 1,
                loss: 2
            }
    
            const manCityScore = teamScore(manCityResults)
    
            expect(manCityScore).toBe(1)        
        })

   })

   describe("teamsScores", () => {
        it("should return an array of teams with their scores", () => {
            const teamsWithScores = [
                {team: "Man City", score: 1}, 
                {team: "Chelsea", score: 7},    
                {team: "Liverpool", score: 2}, 
                {team: "Newcastle", score: 5},           
            ]
            const result = teamsScores(matches)

            expect(result).toStrictEqual(teamsWithScores)
        })
   })

   describe("rankTeams", () => {
        it("should return an array of teams in order or score ranking", () => {
            const rankedTeams = [ 
                {team: "Man City", score: 1}, 
                {team: "Liverpool", score: 2}, 
                {team: "Newcastle", score: 5},  
                {team: "Chelsea", score: 7}
            ]
            const result = rankTeams(matches)

            expect(result).toStrictEqual(rankedTeams)
        })
   })

})