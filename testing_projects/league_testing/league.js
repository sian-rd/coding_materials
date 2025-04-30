const teamNames = (matches) => {
    const teamsWithDuplicates = matches.reduce((acc, match) => {
        acc.push(match.home)
        acc.push(match.away)
        return acc
    }, [])

    return [...new Set(teamsWithDuplicates)]
}

const getWinner = (match) => {
    if (match.score[0] > match.score[1]) return match.home
    if (match.score[1] > match.score[0]) return match.away
    return "NONE"
}

const teamPlayed = (team, match) => {
    return match.home === team || match.away === team
}

const teamResults = (matches, teamName) => {
    const results = {
        win: 0,
        draw: 0,
        lose: 0
    }

    matches.forEach((match) => {
        if (teamPlayed(teamName, match)) {
            const winner = getWinner(match)

            if (winner === teamName) {
                results.win = results.win + 1
            } else if (winner === "NONE") {
                results.draw = results.draw + 1
            } else {
                results.lose = results.lose + 1
            }
        }
    })

    return results
}

const teamScore = (teamResults) => {
    return (teamResults.win * 3) + teamResults.draw
}

const teamsScores = (matches) => {
    const teams = teamNames(matches)

    return teams.reduce((acc, teamName) => {
        const results = teamResults(matches, teamName)
        const score = teamScore(results)

        const teamWithScore = {
            team: teamName, 
            score: score
        }

        acc.push(teamWithScore)
        return acc
    }, []) 
}

const rankTeams = (matches) => {
   return teamsScores(matches).sort((a, b) => a.score - b.score)
}


export { teamNames, getWinner, teamPlayed, teamResults, teamScore, teamsScores, rankTeams }