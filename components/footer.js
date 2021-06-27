import Container from './container'
import { SocialIcon } from 'react-social-icons'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row lg:items-start">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Arabuluculuk ile ilgili bilgiler bulabileceğiniz bir blog.
          </h3>
          <div className="flex flex-row justify-center items-center lg:pl-4 lg:w-1/2 lg:space-x-5">
              <div>
                <SocialIcon
              url="https://twitter.com/avsarcoteli"
              className="mr-4"
              target="_blank"
              style={{ height: 35, width: 35 }}
            />
                </div>

                <div>
                <SocialIcon
              url="https://www.youtube.com/channel/UCH5qLtQJercl1tURGPNCiHg"
              className="mr-4"
              target="_blank"
              style={{ height: 35, width: 35 }}
            />
                </div>
                <div>
                <SocialIcon
              url="https://www.linkedin.com/in/avsarcoteli/"
              className="mr-4"
              target="_blank"
              style={{ height: 35, width: 35 }}
            />
                </div>
            
          </div>
        </div>
      </Container>
    </footer>
  )
}
