var obj = {
    
        "login": "Rizwanjamal",
        "id": 8683960,
        "node_id": "MDQ6VXNlcjg2ODM5NjA=",
        "avatar_url": "https://avatars.githubusercontent.com/u/8683960?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Rizwanjamal",
        "html_url": "https://github.com/Rizwanjamal",
        "followers_url": "https://api.github.com/users/Rizwanjamal/followers",
        "following_url": "https://api.github.com/users/Rizwanjamal/following{/other_user}",
        "gists_url": "https://api.github.com/users/Rizwanjamal/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Rizwanjamal/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Rizwanjamal/subscriptions",
        "organizations_url": "https://api.github.com/users/Rizwanjamal/orgs",
        "repos_url": "https://api.github.com/users/Rizwanjamal/repos",
        "events_url": "https://api.github.com/users/Rizwanjamal/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Rizwanjamal/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Rizwan Jamal ⚡️",
        "company": "Upwork",
        "blog": "https://www.upwork.com/freelancers/~01d10c23d4ffe3c658",
        "location": "Pakistan",
        "email": null,
        "hireable": true,
        "bio": "💠Web & Mobile App Developer💠\r\nReact / React-Native / Angular / Ionic / NodeJS\r\n⚡️ Hire Me On Upwork ⚡️",
        "twitter_username": null,
        "public_repos": 38,
        "public_gists": 0,
        "followers": 41,
        "following": 4,
        "created_at": "2014-09-07T06:07:32Z",
        "updated_at": "2021-07-19T12:59:08Z"
}



function getData(){
    var data = document.getElementById("search").value;
    console.log(data);


    var avatar = document.getElementById("avatar");
    avatar.innerHTML = obj.avatar_url;
}