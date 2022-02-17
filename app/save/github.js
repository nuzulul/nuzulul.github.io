async function getData(mypath = '') {

    let user = netlifyIdentity.currentUser()
    let token = user.token.access_token
    var url = "https://nuzulul.netlify.app/.netlify/git/github/contents/" + mypath
    var bearer = 'Bearer ' + token
    
    return fetch(url, {
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json'
            }
        }).then(resp => {
            return resp.json()
        }).then(data => {

            if (data.code == 400) {

                netlifyIdentity.refresh().then(function(token) {
                    getData(mypath)
                })

            } else {
                // base64 decode content
                data.content = atob(data.content)
                return data
            }
        })
        .catch(error => {
            return error
        })

}

async function saveData(mypath, data) {

    return getData(mypath).then(function(curfile) {

        let user = netlifyIdentity.currentUser()
        let token = user.token.access_token
        let opts = {
            path: mypath,
            message: "test commit",
            content: btoa(data),
            branch: "master",
            committer: { name: "Nuzulul Zulkarnain Haq", email: "nuzulz@gmail.com" },
        }
        if (typeof curfile !== 'undefined') {
            opts.sha = curfile.sha
        }

        var url = "https://nuzulul.netlify.app/.netlify/git/github/contents/" + mypath
        var bearer = 'Bearer ' + token
        return fetch(url, {
                body: JSON.stringify(opts),
                method: 'PUT',
                withCredentials: true,
                credentials: 'include',
                headers: {
                    'Authorization': bearer,
                    'Content-Type': 'application/json'
                }
            }).then(resp => {
                return resp.json()
            }).then(data => {
                if (data.code == 400) {

                    netlifyIdentity.refresh().then(function(token) {
                        saveData(mypath)
                    })

                } else {
                    return data
                }
            })
            .catch(error => this.setState({
                message: 'Error: ' + error
            }))

    })

}