declare module "*/courses.json" {
  interface Star {
    id: number
    title: string
  }

  interface Course {
    id: number
    title: string
    stars: Star[]
  }

  const json: Course[]
  export = json
}
