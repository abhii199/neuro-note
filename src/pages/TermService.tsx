import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';


const TermService: React.FC = () => {
  return (
    <>
      <div className="prose min-h-screen flex flex-col justify-center items-center mt-20">
        <header className="max-w-5xl w-full px-4 flex items-center">
          <a href='/'>
            <ArrowLeft/>
          </a>
        </header>
        <main className="max-w-5xl mt-8 container grow px-4 py-8">
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <div className='prose '>
            <h2 className="text-2xl font-semibold mt-6 mb-3">1. Acceptance of Terms</h2>
            <p className='mb-3'>By accessing or using the Neuro Note service, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-3">2. Description of Service</h2>
            <p className='mb-3'>Neuro Note provides a digital knowledge management platform. We reserve the right to modify or discontinue, temporarily or permanently, the service with or without notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-3">3. User Responsibilities</h2>
            <p className='mb-3'>You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-3">4. Content</h2>
            <p className='mb-3'>You retain all rights to the content you post on Neuro Note. By posting content, you grant us a license to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the service.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-3">5. Termination</h2>
            <p className='mb-3'>We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-3">6. Changes to Terms</h2>
            <p className='mb-3'>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. It is your responsibility to check these Terms periodically for changes.
            </p>
          </div>
          <footer className="mt-12"><Footer/></footer>
        </main>
      </div>
    </>
  )
}

export default TermService