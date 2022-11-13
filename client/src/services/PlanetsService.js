const baseURL = 'http://localhost:9000/api/planets/'
//app.use('/api/planets', gamesRouter); --- base route using by express

 const PlanetsService = {
  getPlanets() {
    return fetch(baseURL)
    .then(res => res.json())
  },

  postPlanets(payload) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },

  deletePlanets(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  }
}

export default PlanetsService;