
function calculateReward (position) {
    let reward = 0

    switch (position) {
        case position: 1
            reward = 5
            break;
        case position: 2
            reward = 3
        break;
        case position: 3
            reward = 2
            break;
    }

    return reward
}


module.exports = calculateReward