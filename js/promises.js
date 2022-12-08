
const LastCommit = (username) => {
    fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `token ${GitHubKey}`}})
        .then(response => response.json())
        .then(events => {
            let Etypes = events.map(event => event.type)
            let recent = Etypes.indexOf("PushEvent")
            console.log(events[recent].created_at)
        })
}

LastCommit("DanielleVMasters")