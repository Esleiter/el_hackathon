export function getRandomMusic() {
  var musicList = [
    "I know You",
    "Golden Hour: Piano Version",
    "Work Out",
    "Mockingbird",
  ];

  var randomIndex = Math.floor(Math.random() * musicList.length);
  var randomMusic = musicList[randomIndex];

  return randomMusic;
}
