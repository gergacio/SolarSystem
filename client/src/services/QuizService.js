const baseURL = 'http://localhost:9000/api/quiz/'
//app.use('/api/planets', gamesRouter); --- base route using by express

 const QuizService = {
  getQuiz() {
    return fetch(baseURL)
    .then(res => res.json())
  },
 }

  export default QuizService;