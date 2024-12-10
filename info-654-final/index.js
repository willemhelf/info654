function ping() {

    let imageArray = [["squirrel1.jpg", "Chestnut squirrel on black background."], ["squirrel2.jpg", "Chestnut squirrel in a tree holding a nut."], ["squirrel3.jpg", "Gray squirrel peeking out from behind a tree."], ["squirrel4.jpg", "Chestnut squirrel standing on two feet."], ["squirrel5.jpg", "Close-up of squirrel standing on cut branch."], ["squirrel6.jpg", "Imaged angled facing up tree with squirrel looking down at camera"], ["squirrel7.jpg", "Close-up of gray squirrel eating a nut"], ["squirrel8.jpg", "Gray and chesetnut squirrel in front of a tree holding a nut"], ["squirrel9.jpg", "Chestnut squirrel sitting in a birdhouse in a tree"], ["squirrel10.jpg", "Gray squirrel standing on side of tree"], ["squirrel11.jpg", "Gray squirrel standing on fallen tree stump"]]
    let randomImage = Math.floor(Math.random() * imageArray.length)
    let selectedImage = imageArray[randomImage]

    let eating = true
    let foraging = true
    let squirrelLocation = ""

    var rand = Math.floor(Math.random() * 101)
    fetch("https://data.cityofnewyork.us/resource/vfnx-vebw.json")
    .then(res => res.json())
    .then(function(data) {

        console.log(data[rand])

        let squirrelData = data[rand]
        squirrelData["eating"] === true ? eating = "is eating a nut" : eating = "isn't eating anything"
        squirrelData["foraging"] === true ? foraging = "has been foraging" : foraging = "hasn't been foraging recently"
        squirrelData["location"] === "Above Ground" ? squirrelLocation = "up in the trees" : squirrelLocation = "down on the ground"

        document.getElementById("api-text-result").innerHTML = `<div>
            <p>You look ${squirrelLocation} and see a ${squirrelData["primary_fur_color"].toLowerCase()} squirrel!</p>
            <p>It ${eating} and ${foraging}.</p>
            <p>You ID it as squirrel number ${squirrelData["unique_squirrel_id"]}.</p>
        </div>`

        document.getElementById("image-result").innerHTML = `<img src="images/${selectedImage[0]}" alt="${selectedImage[1]}">`
    })

}

window.onload = ping()