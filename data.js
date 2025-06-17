//Missing persons data.
//This took me almost two full days of just uploading one by one
//Sadly dont know how to scrub a website yet
/* just copy and paste this
{
    lat: 53.898455,
    lng: -122.781462,
    name: "name",
    age: null,
    gender: "M",
    date: "May 26, 2012",
    status: "Missing",
    type: "missing",
    photo: "faces/.jpg",
    profile: "link"
  },
*/

/* None of this was AI. This was all me and it took hours. I named it data.js because this whole part is data.
I had to input everything piece -by piece. I would of loved a scrapper but I dont know how to do that yet.
All lat and lng was found by googling every single person individually and looking at facebook pages and such. */

const allMarkers = [
    //1960-1979 --V
  {
    lat: 49.20,
    lng: -123.05,
    name: "James Patrick Ault",
    age: null,
    gender: "M",
    date: "November 10, 1952",
    status: "Missing",
    type: "missing",
    photo: "faces/jamesP.jpg",
    profile: "https://www.vancouvermissingpersons.com/missing-persons-files/james-patrick-ault-1952-11-10"
  },
  {
    lat: 49.205082,
    lng: -121.715163,
    name: "Arthur Neumeyer",
    age: null,
    gender: "M",
    date: "January 19, 1944",
    status: "Unsolved",
    type: "missing",
    photo: "faces/arthurN.jpg",
    profile: "https://www.vancouvermissingpersons.com/missing-persons-files/arthur-neumeyer-1944-01-19"
  },
  //1980-1989 --V
 
  //Modern --V
    {
    lat: 50.260942,
    lng: -121.591931,
    name: "Person Patricia Quinn",
    age: 33,
    gender: "F",
    date: "July 17, 2008",
    status: "Missing",
    type: "missing",
    photo: "faces/PPQ.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=5535"
  },

  {
    lat: 53.898455,
    lng: -122.781462,
    name: "Barry Blain Seymour",
    age: 32,
    gender: "M",
    date: "May 26, 2012",
    status: "Missing",
    type: "missing",
    photo: "faces/bbs.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2113&languageId=1&contentId=25878"
  },

  {
    lat: 49.193195,
    lng: -122.856479,
    name: "Nicholas Rubini",
    age: 19,
    gender: "M",
    date: "January 22, 2016",
    status: "Missing",
    type: "missing",
    photo: "faces/rubini.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2126&languageId=1&contentId=45001"
  },

  {
    lat: 49.275705,
    lng: -122.515256,
    name: "Kyonghee Kim",
    age: null,
    gender: "F",
    date: "October 05th, 2016",
    status: "Missing",
    type: "missing",
    photo: "faces/kkim.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2126&languageId=1&contentId=48552"
  },

  {
    lat: 54.939840,
    lng: -127.554606,
    name: "Frances Brown",
    age: 53,
    gender: "F",
    date: "October 14, 2017",
    status: "Missing",
    type: "missing",
    photo: "faces/fb.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=53040"
  },  

  {
    lat: 49.326772,
    lng: -124.307657,
    name: "Carmel Gilmour",
    age: 36,
    gender: "F",
    date: "November 15, 2017",
    status: "Missing",
    type: "missing",
    photo: "faces/carmelG.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=53381"
  },

  {
    lat: 49.190765,
    lng: -122.812317,
    name: "Danny Bayer",
    age: 48,
    gender: "M",
    date: "March 6, 2018",
    status: "Missing",
    type: "missing",
    photo: "faces/dannyb.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2126&languageId=1&contentId=54719"
  },

  {
    lat: 49.104752,
    lng: -121.821342,
    name: "Kristofer Shawn Couture",
    age: 25,
    gender: "M",
    date: "January 25, 2019",
    status: "Missing",
    type: "missing",
    photo: "faces/kristofw.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=60087"
  },

  {
    lat: 54.551096,
    lng: -130.433766,
    name: "Lawrence Maitland",
    age: 42,
    gender: "M",
    date: "July 17, 2019",
    status: "Missing",
    type: "missing",
    photo: "faces/lawrencem.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=60772"
  },

  {
    lat: 54.388551,
    lng: -126.681082,
    name: "Laureen Campbell Fabian",
    age: 69,
    gender: "F",
    date: "October 28, 2019",
    status: "Missing",
    type: "missing",
    photo: "faces/laurenf.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=61855"
  },

  {
    lat: 53.973023,
    lng: -132.125158,
    name: "Shaylanna Meaghan Lewis",
    age: 23,
    gender: "F",
    date: "March 21, 2020",
    status: "Missing",
    type: "missing",
    photo: "faces/shaylam.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=63787"
  },

  {
    lat: 56.257603,
    lng: -120.847619,
    name: "William Bird",
    age: 35,
    gender: "M",
    date: "July 12, 2020",
    status: "Missing",
    type: "missing",
    photo: "faces/willbird.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=65384"
  },

  {
    lat: 49.177136,
    lng: -122.757258,
    name: "John Wayne Luste",
    age: 23,
    gender: "M",
    date: "November 5, 2020",
    status: "Missing",
    type: "missing",
    photo: "faces/johnl.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2126&languageId=1&contentId=66745"
  },

  {
    lat: 49.063149,
    lng: -122.826737,
    name: "Pranhraj Sekhon",
    age: 24,
    gender: "M",
    date: "April 1, 2021",
    status: "Missing",
    type: "missing",
    photo: "faces/prabhrajS.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=1498&languageId=1&contentId=68931"
  },

  {
    lat: 54.323279,
    lng: -130.307821,
    name: "Shawn Weaver",
    age: 43,
    gender: "M",
    date: "August 21, 2021",
    status: "Missing",
    type: "missing",
    photo: "faces/shawnw.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=71109"
  },

  {
    lat: 48.622968,
    lng: -124.348852,
    name: "Gerald Kearny",
    age: 61,
    gender: "M",
    date: "October 21, 2021",
    status: "Missing",
    type: "missing",
    photo: "faces/geraldk.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=71772"
  },

  {
    lat: 49.242891,
    lng: -123.015862,
    name: "Reshmi Mani",
    age: 52,
    gender: "F",
    date: "January 7, 2022",
    status: "Missing",
    type: "missing",
    photo: "faces/reshi.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2114&languageId=1&contentId=73012"
  },

  {
    lat: 49.244200,
    lng: -124.808023,
    name: "Amber Manthorne",
    age: 40,
    gender: "F",
    date: "July 8, 2022",
    status: "Missing",
    type: "missing",
    photo: "faces/amberm.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2136&languageId=1&contentId=75693&detachmentDataId=43843"
  },

  {
    lat: 50.125966,
    lng: -122.935676,
    name: "Colin Taylor",
    age: 39,
    gender: "M",
    date: "July 13, 2022",
    status: "Missing",
    type: "missing",
    photo: "faces/colint.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=75777"
  },

  {
    lat: 59.973297,
    lng: -122.506074,
    name: "Bryan Twan",
    age: 57,
    gender: "M",
    date: "June 6, 2016",
    status: "Missing",
    type: "missing",
    photo: "faces/bryant.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=79823"
  },

  {
    lat: 50.684502,
    lng: -120.286447,
    name: "Fred Yellow Old Woman",
    age: 54,
    gender: "M",
    date: "June 14, 2011",
    status: "Missing",
    type: "missing",
    photo: "faces/fredy.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=80445"
  },

  {
    lat: 49.130887,
    lng: -123.923811,
    name: "Christopher Massingham",
    age: 53,
    gender: "M",
    date: "June 27, 2023",
    status: "Missing",
    type: "missing",
    photo: "faces/chrism.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=80401"
  },

  {
    lat: 49.152845,
    lng: -123.118632,
    name: "Ryan Liu",
    age: 22,
    gender: "M",
    date: "July 17, 2023",
    status: "Missing",
    type: "missing",
    photo: "faces/ryanl.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2122&languageId=1&contentId=80484"
  },

  {
    lat: 50.670355,
    lng: -120.32718,
    name: "Jordan Dean Nande",
    age: 27,
    gender: "M",
    date: "July 20, 2023",
    status: "Missing",
    type: "missing",
    photo: "faces/jordann.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=80875"
  },

  {
    lat: 49.221835,
    lng: -123.004941,
    name: "Jiexion 'Jackson' Xu",
    age: 28,
    gender: "M",
    date: "July 10, 2022",
    status: "Missing",
    type: "missing",
    photo: "faces/jie.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2114&languageId=1&contentId=80641"
  },

  {
    lat: 49.166016,
    lng: -121.950074,
    name: "Masoud Sanayei",
    age: 39,
    gender: "M",
    date: "July 16, 2023",
    status: "Missing",
    type: "missing",
    photo: "faces/masouds.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2114&languageId=1&contentId=80924"
  },

  {
    lat: 55.898019,
    lng: -120.143567,
    name: "Dave Daniel Domingo",
    age: 24,
    gender: "M",
    date: "August 29, 2023",
    status: "Missing",
    type: "missing",
    photo: "faces/daved.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=81092"
  },

  {
    lat: 50.255708,
    lng: -119.272791,
    name: "Blayne Ferguson",
    age: 27,
    gender: "M",
    date: "September 21, 2023",
    status: "Missing",
    type: "missing",
    photo: "faces/blaynef.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=81349"
  },

  {
    lat: 49.461783,
    lng: -117.283055,
    name: "Cory Westcott",
    age: 34,
    gender: "M",
    date: "September 28, 2023",
    status: "Missing",
    type: "missing",
    photo: "faces/coryw.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=81388"
  },

  {
    lat: 49.900681,
    lng: -119.48809,
    name: "Brett William moore",
    age: 35,
    gender: "M",
    date: "October 13, 2022",
    status: "Missing",
    type: "missing",
    photo: "faces/brettw.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=81926"
  },

  {
    lat: 50.149033,
    lng: -122.959028,
    name: "Robert McKean",
    age: 80,
    gender: "M",
    date: "October 9, 2023",
    status: "Missing",
    type: "missing",
    photo: "faces/robertm.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=81530"
  },

  {
    lat: 49.761453,
    lng: -124.550321,
    name: "Mark Braunagel",
    age: 50,
    gender: "M",
    date: "October 22, 2023",
    status: "Missing",
    type: "missing",
    photo: "faces/markb.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=81758"
  },

  {
    lat: 49.207143,
    lng: -122.590411,
    name: "Rebecca Harbowy",
    age: 36,
    gender: "F",
    date: "November 23, 2023",
    status: "Missing",
    type: "missing",
    photo: "faces/rebeccah.png",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2123&languageId=1&contentId=82036"
  },

  {
    lat: 55.247636,
    lng: -127.592243,
    name: "Sheldon McDonald",
    age: 46,
    gender: "M",
    date: "November 17, 2023",
    status: "Missing",
    type: "missing",
    photo: "faces/sheldonm.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=82037"
  },

  {
    lat: 49.234599,
    lng: -124.782687,
    name: "Scott Bezanson",
    age: 51,
    gender: "M",
    date: "December 14, 2022",
    status: "Missing",
    type: "missing",
    photo: "faces/scottb.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=82135"
  },

  {
    lat: 54.440142,
    lng: -124.254250,
    name: "Justin Joseph",
    age: 42,
    gender: "M",
    date: "November 9, 2023",
    status: "Missing",
    type: "missing",
    photo: "faces/justinj.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2136&languageId=1&contentId=82454"
  },

  {
    lat: 50.209384,
    lng: -119.280585,
    name: "Robert Lee Baines",
    age: 83,
    gender: "M",
    date: "January 2, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/robertlb.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=82543"
  },

  {
    lat: 49.162542,
    lng: -122.857071,
    name: "Narinder Sandhu",
    age: 69,
    gender: "M",
    date: "May 26, 2012",
    status: "Missing",
    type: "missing",
    photo: "faces/narinders.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2126&languageId=1&contentId=82567"
  },

  {
    lat: 49.178024,
    lng: -121.970845,
    name: "Jamie Curtis Bristol",
    age: 41,
    gender: "M",
    date: "December 22, 2023",
    status: "Missing",
    type: "missing",
    photo: "faces/jamiecb.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=82605"
  },

  {
    lat: 55.760373,
    lng: -120.231034,
    name: "Cole Hosack",
    age: 24,
    gender: "M",
    date: "January 1, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/coleh.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=82713"
  },

  {
    lat: 49.784538,
    lng: -124.174574,
    name: "Linda Diange Albert",
    age: 68,
    gender: "F",
    date: "January 13, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/linda.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=82721"
  },

  {
    lat: 53.924932,
    lng: -122.797014,
    name: "Billy-Jo Mindel",
    age: 36,
    gender: "F",
    date: "May 26, 2012",
    status: "Missing",
    type: "missing",
    photo: "faces/billyj.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2113&languageId=1&contentId=82791"
  },

  {
    lat: 50.112292,
    lng: -120.79495,
    name: "Tara Moran",
    age: 27,
    gender: "F",
    date: "January 31, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/taram.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=83132"
  },  

  {
    lat: 49.162827,
    lng: -124.031990,
    name: "Gregory Nowosad",
    age: 65,
    gender: "M",
    date: "March 1, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/gregoryn.png",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=876&languageId=1&contentId=83295"
  },
  
  {
    lat: 49.159623,
    lng: -122.883611,
    name: "Jasdeep Parmar",
    age: 23,
    gender: "M",
    date: "March 15, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/jasdeep.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2126&languageId=1&contentId=83428"
  },

  {
    lat: 49.282806,
    lng: -124.249216,
    name: "Sara Sherry",
    age: 45,
    gender: "F",
    date: "Febuary 17, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/saras.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=83539"
  },

  {
    lat: 49.915941,
    lng: -126.662809,
    name: "Allan Duarte Da Rosa",
    age: 21,
    gender: "M",
    date: "April 5, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/allan.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=83650"
  },

  {
    lat: 55.257237,
    lng: -127.604216,
    name: "Spencer Oliver",
    age: 30,
    gender: "M",
    date: "April 18, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/spencero.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=83772"
  },

  {
    lat: 50.111530,
    lng: -120.788074,
    name: "Dale Revell",
    age: 61,
    gender: "M",
    date: "April 30, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/daler.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=83876"
  },

  {
    lat: 49.269984,
    lng: -122.97089,
    name: "Pablo Guerra",
    age: 17,
    gender: "M",
    date: "May 10, 2004",
    status: "Missing",
    type: "missing",
    photo: "faces/pablog.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2114&languageId=1&contentId=84552"
  },

  {
    lat: 48.893810,
    lng: -124.273291,
    name: "Nicholas Marion",
    age: 38,
    gender: "M",
    date: "June 30, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/nicholasm.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=84617"
  },

  {
    lat: 49.234707,
    lng: -124.807740,
    name: "Shelly Hofmann",
    age: 57,
    gender: "F",
    date: "June 30, 2016",
    status: "Missing",
    type: "missing",
    photo: "faces/shellyh.png",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=84660"
  },

  {
    lat: 49.154534,
    lng: -122.300209,
    name: "Darian Parker",
    age: 23,
    gender: "M",
    date: "July 6, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/darianp.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2119&languageId=1&contentId=84689"
  },

  {
    lat: 58.804113,
    lng: -122.679708,
    name: "Karen Tessier",
    age: 57,
    gender: "F",
    date: "July 9, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/karent.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=84773"
  },

  {
    lat: 50.830460,
    lng: -120.298134,
    name: "Stan Cappis",
    age: 50,
    gender: "M",
    date: "July 12, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/stanc.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2116&languageId=1&contentId=84807"
  },

  {
    lat: 55.338376,
    lng: -123.096942,
    name: "Alice Chingee",
    age: 62,
    gender: "F",
    date: "July 15, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/alicec.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=84859"
  },

  {
    lat: 49.250061,
    lng: -122.860156,
    name: "Nabeel Kessani",
    age: 39,
    gender: "M",
    date: "July 31, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/nabeel.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2115&languageId=1&contentId=85002"
  },

  {
    lat: 53.912677,
    lng: -121.965087,
    name: "Noel Yassinksy",
    age: 67,
    gender: "M",
    date: "August 10, 2014",
    status: "Missing",
    type: "missing",
    photo: "faces/noel.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=85208"
  },

  {
    lat: 53.902226,
    lng: -122.756667,
    name: "Jack Family",
    age: null,
    gender: "M",
    date: "August 2, 1989",
    status: "Missing",
    type: "missing",
    photo: "faces/jackfamily.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2113&languageId=1&contentId=85253"
  },

  {
    lat: 49.739829,
    lng: -119.764936,
    name: "Stephanie Woodcock",
    age: 40,
    gender: "F",
    date: "September 3, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/stephw.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=85533"
  },

  {
    lat: 49.226758,
    lng: -122.892798,
    name: "Moses Yoon",
    age: 36,
    gender: "M",
    date: "September 16, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/moses.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2126&languageId=1&contentId=85534"
  },

  {
    lat: 49.270383,
    lng: -123.017641,
    name: "Tyler Bursey",
    age: 33,
    gender: "M",
    date: "September 22, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/tylerb.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2114&languageId=1&contentId=85707"
  },

  {
    lat: 49.309885,
    lng: -123.042009,
    name: "Scott Phillips",
    age: 43,
    gender: "M",
    date: "September 29, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/scottp.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2126&languageId=1&contentId=85734"
  },

  {
    lat: 55.728009,
    lng: -121.194552,
    name: "James Barnes",
    age: 28,
    gender: "M",
    date: "October 18, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/jamesb.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=85858"
  },

  {
    lat: 49.139772,
    lng: -122.290799,
    name: "Kenneth Sookocheff",
    age: 65,
    gender: "M",
    date: "October 27, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/kenneths.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2119&languageId=1&contentId=85961"
  },

  {
    lat: 57.082420,
    lng: -122.593438,
    name: "Gary Brandon Reno",
    age: 29,
    gender: "M",
    date: "November 1, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/garyb.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=85988"
  },

  {
    lat: 49.525347,
    lng: -115.765926,
    name: "Roland Gamache",
    age: 53,
    gender: "M",
    date: "November 06, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/rolandg.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=86002"
  },

  {
    lat: 49.133734,
    lng: -123.106263,
    name: "Jonathan Krause",
    age: 40,
    gender: "M",
    date: "November 11, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/jonk.png",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2122&languageId=1&contentId=86052"
  },

  {
    lat: 49.108089,
    lng: -122.656146,
    name: "Chantelle Moore",
    age: 30,
    gender: "F",
    date: "October 16, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/chantelle.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2117&languageId=1&contentId=86182"
  },

  {
    lat: 49.504506,
    lng: -115.739147,
    name: "Alexander Murray MacKay",
    age: 44,
    gender: "M",
    date: "December 3, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/alexanderm.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=86285"
  },

  {
    lat: 49.508142,
    lng: -119.576518,
    name: "David Battilana",
    age: 61,
    gender: "M",
    date: "January 2, 2025",
    status: "Missing",
    type: "missing",
    photo: "faces/davidb.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=86558"
  },

  {
    lat: 49.169550,
    lng: -123.024810,
    name: "Satveer Seehra",
    age: 25,
    gender: "M",
    date: "January 8, 2025",
    status: "Missing",
    type: "missing",
    photo: "faces/satveer.png",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2122&languageId=1&contentId=86606"
  },

  {
    lat: 53.579296,
    lng: -124.949528,
    name: "Ronald McCook",
    age: 40,
    gender: "M",
    date: "May 26, 2012",
    status: "Missing",
    type: "missing",
    photo: "faces/ronaldm.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=86851"
  },

  {
    lat: 49.766117,
    lng: -117.462969,
    name: "Thierry Emile Brenon",
    age: 71,
    gender: "M",
    date: "Febuary 2, 2025",
    status: "Missing",
    type: "missing",
    photo: "faces/thierry.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=86944"
  },

  {
    lat: 49.487856,
    lng: -117.297132,
    name: "Christopher Ward Newton",
    age: 33,
    gender: "M",
    date: "December 26, 2023",
    status: "Missing",
    type: "missing",
    photo: "faces/christopherw.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=87027"
  },

  {
    lat: 48.751957,
    lng: -123.692860,
    name: "Clyde Johnny Sr.",
    age: 68,
    gender: "M",
    date: "March 7, 2025",
    status: "Missing",
    type: "missing",
    photo: "faces/clyde.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=87246"
  },

  {
    lat: 48.656397,
    lng: -123.632679,
    name: "David Dion",
    age: 46,
    gender: "M",
    date: "March 21, 2025",
    status: "Missing",
    type: "missing",
    photo: "faces/davidd.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=87386"
  },

  {
    lat: 49.166901,
    lng: -123.1215001,
    name: "Yu Chi (Kyle) Lin",
    age: 35,
    gender: "M",
    date: "March 28, 2025",
    status: "Missing",
    type: "missing",
    photo: "faces/yuchi.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2122&languageId=1&contentId=87437"
  },

  {
    lat: 50.042259,
    lng: -125.277905,
    name: "Kolby Sinclair",
    age: 30,
    gender: "M",
    date: "March 28, 2025",
    status: "Missing",
    type: "missing",
    photo: "faces/kolbys.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=87442"
  },

  {
    lat: 50.743845,
    lng: -119.246641,
    name: "Derrick Ryde",
    age: 34,
    gender: "M",
    date: "March 29, 2025",
    status: "Missing",
    type: "missing",
    photo: "faces/derrickr.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=87443"
  },

  {
    lat: 54.515266,
    lng: -128.577587,
    name: "James Robinson",
    age: 58,
    gender: "M",
    date: "October 26, 2024",
    status: "Missing",
    type: "missing",
    photo: "faces/jamesr.jpg",
    profile: "https://bc-cb.rcmp-grc.gc.ca/ViewPage.action?siteNodeId=2087&languageId=1&contentId=87483"
  },

  //Below here is all Homicides. Above is all Missing 

  {
    lat: 49.249939,
    lng: -123.123533,
    name: "Glenna Sowan",
    age: 25,
    gender: "F",
    date: "September 30, 1988",
    status: "Unsolved",
    type: "homicide",
    photo: "faces/glenna.png",
    profile: "https://www.vpdcoldcases.ca/glenna-sowan/"
  },

  {
    lat: 49.225513,
    lng: -123.080009,
    name: "Lisa Gavin",
    age: 21,
    gender: "F",
    date: "August 12, 1988",
    status: "Unsolved",
    type: "homicide",
    photo: "faces/lisa.jpg",
    profile: "https://www.vpdcoldcases.ca/lisa-gavin/"
  },

  {
    lat: 49.280888,
    lng: -123.114768,
    name: "Chantel Gillade",
    age: 20,
    gender: "F",
    date: "September 1, 1995",
    status: "Unsolved",
    type: "homicide",
    photo: "faces/chantel.png",
    profile: "https://www.vpdcoldcases.ca/chantel-gillade/"
  },

  {
    lat: 49.278064,
    lng: -123.061681,
    name: "Mary O'Donnell",
    age: 53,
    gender: "F",
    date: "July 28, 1988",
    status: "Unsolved",
    type: "homicide",
    photo: "faces/mary.png",
    profile: "https://www.vpdcoldcases.ca/mary-odonnell/"
  },

  {
    lat: 49.222607,
    lng: -123.139956,
    name: "Mayvette Monzon",
    age: 31,
    gender: "F",
    date: "September 23, 2005",
    status: "Unsolved",
    type: "homicide",
    photo: "faces/mayvette.png",
    profile: "https://www.vpdcoldcases.ca/mayvette-monzon/"
  },

  {
    lat: 49.221854,
    lng: -123.08486,
    name: "The Pauls",
    age: null,
    gender: "M",
    date: "June 11, 1958",
    status: "Unsolved",
    type: "homicide",
    photo: "faces/pauls.png",
    profile: "https://www.vpdcoldcases.ca/the-pauls/"
  },

  {
    lat: 49.283105,
    lng: -123.095219,
    name: "Melanie Thomson",
    age: 36,
    gender: "F",
    date: "September, 2010",
    status: "Unsolved",
    type: "homicide",
    photo: "faces/melanie.png",
    profile: "https://www.vpdcoldcases.ca/melanie-thomson/"
  },

  {
    lat: 49.283097,
    lng: -123.132831,
    name: "Craig Abrahams",
    age: 28,
    gender: "M",
    date: "December 18, 1995",
    status: "Unsolved",
    type: "homicide",
    photo: "faces/craig.png",
    profile: "https://www.vpdcoldcases.ca/craig-abrahams/"
  },

  {
    lat: 49.254026,
    lng: -123.145417,
    name: "Karen-Lee Taylor",
    age: 19,
    gender: "F",
    date: "August 24, 1990",
    status: "Unsolved",
    type: "homicide",
    photo: "faces/karenL.png",
    profile: "https://www.vpdcoldcases.ca/karen-lee-taylor/"
  },

  {
    lat: 49.220915,
    lng: -123.071480,
    name: "Cathy Berard",
    age: 61,
    gender: "F",
    date: "July 4, 1996",
    status: "Unsolved",
    type: "homicide",
    photo: "faces/cathy.png",
    profile: "https://www.vpdcoldcases.ca/cathy-berard/"
  },

  {
    lat: 49.288497,
    lng: -123.122370,
    name: "Richard Chacon",
    age: 31,
    gender: "M",
    date: "July 25, 1999",
    status: "Unsolved",
    type: "homicide",
    photo: "faces/richard.png",
    profile: "https://www.vpdcoldcases.ca/richard-chacon/"
  },

  {
    lat: 49.219508,
    lng: -123.048533,
    name: "Wille Chong",
    age: 76,
    gender: "F",
    date: "September 11, 2008",
    status: "Unsolved",
    type: "homicide",
    photo: "faces/wille.png",
    profile: "https://www.vpdcoldcases.ca/richard-chacon/"
  },

  {
    lat: 49.205974,
    lng: -123.140426,
    name: "Jillian Fuller",
    age: 28,
    gender: "F",
    date: "March 4, 1993",
    status: "Unsolved",
    type: "homicide",
    photo: "faces/jillian.png",
    profile: "https://www.vpdcoldcases.ca/jillian-fuller/"
  },

  {
    lat: 49.256988,
    lng: -123.101263,
    name: "Evan Garber",
    age: 59,
    gender: "M",
    date: "April 28, 2006",
    status: "Unsolved",
    type: "homicide",
    photo: "faces/evan.png",
    profile: "https://www.vpdcoldcases.ca/evan-garber/"
  },

  {
    lat: 49.282917,
    lng: -123.114616,
    name: "Kristin Gurholt",
    age: 34,
    gender: "F",
    date: "September 4, 1981",
    status: "Unsolved",
    type: "homicide",
    photo: "faces/kristin.png",
    profile: "https://www.vpdcoldcases.ca/kristin-gurholt/"
  },

  {
    lat: 49.265876,
    lng: -123.179006,
    name: "Sheila Henry",
    age: 26,
    gender: "F",
    date: "Febuary 5, 1993",
    status: "Unsolved",
    type: "homicide",
    photo: "faces/sheila.png",
    profile: "https://www.vpdcoldcases.ca/sheila-henry/"
  },

  {
    lat: 49.281303, 
    lng: -123.097517,
    name: "Danielle Larue",
    age: 24,
    gender: "F",
    date: "November, 2002",
    status: "Unsolved",
    type: "homicide",
    photo: "faces/danielle.png",
    profile: "https://www.vpdcoldcases.ca/danielle-larue/"
  },



];

