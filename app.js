let fakeCompetitorList = [
  {
    Rank: 3526,
    Name: "Tyson Franklin",
    Weight: 59,
    Age: 8.6,
    WeightAdjustedRating: 448.9,
    Team: "Midwest Predators",
  },
  {
    Rank: 3527,
    Name: "Sophie Cross",
    Weight: 64.3,
    Age: 9.4,
    WeightAdjustedRating: 4148.3,
    Team: "Unaffiliated",
  },
  {
    Rank: 3528,
    Name: "Chase Brown",
    Weight: 62.5,
    Age: 7.4,
    WeightAdjustedRating: 4142.8,
    Team: "Aston Bandits",
  },
  {
    Rank: 3529,
    Name: "Connor Hanly",
    Weight: 55.0,
    Age: 9.2,
    WeightAdjustedRating: 4140.5,
    Team: "Dynamic",
  },
  {
    Rank: 3530,
    Name: "Kellen Murphy",
    Weight: 55.0,
    Age: 8.5,
    WeightAdjustedRating: 4138.5,
    Team: "GPS Wrestling",
  },
  {
    Rank: 3531,
    Name: "Bobby Hough",
    Weight: 57.8,
    Age: 8.4,
    WeightAdjustedRating: 4137.9,
    Team: "Barn Brothers",
  },
];

$("#theButton").one("click", () => {
  let notOverWeightAndAge = [];

  let getAllOfTheWrestlersDetails = (name) => {
    for (x = 0; x < fakeCompetitorList.length; x++) {
      if (name === fakeCompetitorList[x].Name) {
        alert("1");
        return fakeCompetitorList[x];
      }
    }
  };

  let removeOverWeightAndOverAgeCompetitors = (competitor) => {
    for (x = 0; x < fakeCompetitorList.length; x++) {
      if (competitor) {
        if (
          competitor.Weight >= fakeCompetitorList[x].Weight &&
          competitor.Age >= fakeCompetitorList[x].Age
        ) {
          notOverWeightAndAge.push(fakeCompetitorList[x]);
          alert("2");
        }
      }
    }
  };

  let removeThenSort = (competitor) => {
    removeOverWeightAndOverAgeCompetitors(competitor);
    alert("3");
    //will be mutated (didn't know how not to, I don't think it will matter.)
    notOverWeightAndAge.sort((a, b) => {
      return a.WeightAdjustedRating < b.WeightAdjustedRating ? 1 : -1;
    });
  };

  let competitorWeAreRanking = $("#wrestlerName").val();
  removeThenSort(getAllOfTheWrestlersDetails(competitorWeAreRanking));
  for (x = 0; x < notOverWeightAndAge.length; x++) {
    //some object destructuring for the win!
    alert("4");
    let {
      Rank,
      Name,
      Weight,
      Age,
      WeightAdjustedRating,
      Team,
    } = notOverWeightAndAge[x];

    let hyphenatedName = Name.replace(" ", "-");
    alert("5");
    $("#Rankings").append(
      `
        <tr id=${hyphenatedName}>
        <td>${x + 1}</td>
        <td>${Name}</td>
        <td>${Weight}</td>
        <td>${Age}</td>
        <td>${WeightAdjustedRating}</td>
        <td>${Team}</td>
        </tr>`
    );
  }
  let otherHyphentatedName = competitorWeAreRanking.replace(" ", "-");
  $(`#${otherHyphentatedName}`).css("background-color", "yellow");
  alert("6");
});
