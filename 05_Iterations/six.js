// let coding = ["java","Python","Ruby","Solidatiry","HTML","CSS"]

// let value = coding.forEach( (item) => {
//     console.log(item);
//     return item
    
// } )

// console.log(value);


// let myNums = [1,2,3,4,5,6,7,8,9,10]
// myNums.forEach( (num) => {
//     if (num > 4) {
//         console.log(num);
        
//     }
// } )

// let newN = myNums.filter( (nums) => nums > 4)
// console.log(newN);




const movies = [
    {
      name: "3 Idiots",
      genre: "Comedy-Drama",
      publishYear: 2009,
      director: "Rajkumar Hirani",
    },
    {
      name: "Dangal",
      genre: "Sports Drama",
      publishYear: 2016,
      director: "Nitesh Tiwari",
    },
    {
      name: "PK",
      genre: "Comedy-Sci-Fi",
      publishYear: 2014,
      director: "Rajkumar Hirani",
    },
    {
      name: "Secret Superstar",
      genre: "Drama-Musical",
      publishYear: 2017,
      director: "Advait Chandan",
    },
    {
      name: "Taare Zameen Par",
      genre: "Drama",
      publishYear: 2007,
      director: "Aamir Khan",
    },
    {
      name: "Chak De! India",
      genre: "Sports Drama",
      publishYear: 2007,
      director: "Shimit Amin",
    },
    {
      name: "Zindagi Na Milegi Dobara",
      genre: "Adventure-Comedy",
      publishYear: 2011,
      director: "Zoya Akhtar",
    },
    {
      name: "Queen",
      genre: "Comedy-Drama",
      publishYear: 2013,
      director: "Vikas Bahl",
    },
    {
      name: "Piku",
      genre: "Comedy-Drama",
      publishYear: 2015,
      director: "Shoojit Sircar",
    },
    {
      name: "Andhadhun",
      genre: "Thriller-Comedy",
      publishYear: 2018,
      director: "Sriram Raghavan",
    },
    {
      name: "Avengers: Endgame",
      genre: "Action-Adventure",
      publishYear: 2019,
      director: "Anthony Russo, Joe Russo",
    },
    {
      name: "The Dark Knight",
      genre: "Action-Thriller",
      publishYear: 2008,
      director: "Christopher Nolan",
    },
    {
      name: "Spider-Man: No Way Home",
      genre: "Action-Adventure",
      publishYear: 2021,
      director: "Jon Watts",
    },
    {
      name: "Thor: Ragnarok",
      genre: "Action-Adventure-Comedy",
      publishYear: 2017,
      director: "Taika Waititi",
    },
    {
      name: "Guardians of the Galaxy",
      genre: "Action-Adventure-Comedy",
      publishYear: 2014,
      director: "James Gunn",
    },
    {
      name: "The Batman",
      genre: "Action-Crime",
      publishYear: 2022,
      director: "Matt Reeves",
    },
    {
      name: "Wonder Woman",
      genre: "Action-Adventure",
      publishYear: 2017,
      director: "Patty Jenkins",
    },
    {
      name: "Joker",
      genre: "Psychological Thriller",
      publishYear: 2019,
      director: "Todd Phillips",
    },
    {
      name: "Aquaman",
      genre: "Action-Adventure",
      publishYear: 2018,
      director: "James Wan",
    },
    {
      name: "Black Panther",
      genre: "Action-Adventure",
      publishYear: 2018,
      director: "Ryan Coogler" ,
    },
  ];


//   const movieName = movies.filter( mn => mn.publishYear == "2018")
//   console.log(movieName);
  const movieYear = movies.filter( mn => mn.publishYear >= 2010)
  console.log(movieYear);
  