
function calculateReward (position) {
    let reward = 0

    switch (position) {
        case "1": 
            reward = 5
            break;
        case "2": 
            reward = 3
            break;
        case "3": 
            reward = 2
            break;
    }

    return reward
}


module.exports = calculateReward