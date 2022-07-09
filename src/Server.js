import { createServer } from "miragejs"

let blogs = [
  { id: 1, title: "Yoga and Injuries", body: "Some yoga poses may lead to injuries if not implemented properly. There have been reports of knee and back injuries due to badly performed poses such as the pigeon pose leading to knee pain.", author: "John" },
  // { id: 2, title: "My Second Blog", body: "Yoga is the best medicine for any anxiety issue. Doctors are urging their patient to try out this form of excercise as it has proven benefits.", author: "Nancy" },
]

createServer({
  routes() {
    this.namespace = "api"

    this.get("/blogs", () => {
      return {
        blogs
      }
    })

    // Responding to a POST request
    this.post("/blogs", (schema, request) => {
      let attrs = JSON.parse(request.requestBody)
      attrs.id = Math.floor(Math.random() * 100)

      blogs.push(attrs)

      return { blog: attrs }
    })
  },
})