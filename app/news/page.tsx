import { PaginatedItems } from './pagination'
import Footer from '../footer'

export default function News() {
  return (
    <div>
          <title>A2IM - NEWS</title>
          <div className="relative grow shrink content-center">
<h1 className="pt-20 grow font-bold align-middle text-center leading-tight">
  NEWS
  </h1>
  </div>
      <div id='container'>
          <PaginatedItems postsPerPage={20} />
          </div>
          <Footer />
    </div>
  )
}

