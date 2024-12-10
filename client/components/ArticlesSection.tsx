import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const articles = [
  {
    title: "Coronavirus",
    description: "12 Coronavirus Myths and Facts That You Should Be Aware Of",
    author: "Dr. Diana Borgio",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Vitamins and Supplements",
    description: "Eating Right to Build Immunity Against Cold and Viral Infections",
    author: "Dr. Diana Borgio",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Weight Loss",
    description: "Simple tips to lose weight naturally",
    author: "Dr. John Smith",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Mental Health",
    description: "Understanding and Managing Anxiety in Daily Life",
    author: "Dr. Emily Johnson",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Heart Health",
    description: "5 Lifestyle Changes for a Healthier Heart",
    author: "Dr. Michael Brown",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Nutrition",
    description: "The Role of Antioxidants in Your Diet",
    author: "Dr. Sarah Lee",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function ArticlesSection() {
  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Read top articles from health experts</h2>
        <Button variant="outline">See all articles</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <Card key={index} className="border-none shadow-sm transition-transform duration-300 hover:scale-105">
            <CardContent className="p-0 flex flex-col h-full">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col flex-grow">
                <div className="text-sm text-primary font-semibold mb-2">{article.title}</div>
                <h3 className="text-lg font-semibold mb-2 flex-grow">{article.description}</h3>
                <p className="text-sm text-gray-600">By {article.author}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

