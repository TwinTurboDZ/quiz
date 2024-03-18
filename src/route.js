import landingPage from "./views/landingPage.vue"
import quiz from "./views/quiz.vue"
import result from "./views/result.vue"
import solution from "./views/solution.vue"
const routes = [
  {path: '/',redirect: '/Home' },
  {path : '/home' , name : 'landingPage' ,component : landingPage  },
  {path : '/quiz/:num' , name : 'quizPage' ,component : quiz , props : true },
  {path : '/quiz/solution/:num' , name : 'quizSolutionPage' ,component : solution , props : true },
  {path : '/result' , name : 'resultPage' ,component : result , props : true },
//   { path: '/scripts/:id', component: scriptShow ,name:"scriptShow"},
  ]
  
export default routes