export default function sortBy(players) {
  return players.slice().sort((a, b) => b.health - a.health);
}
