import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'


const Home = () => { 
  
  const loggedIn = {firstName: 'Martin', lastName:'Kariuki', email:'karismartin256@gmail.com'}

  return (
     <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                    type="greeting" 
                    title="Welcome" 
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and transactions efficiently."
                />
                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.53}

                />
            </header>

            RECENT TRANSCATIONS
        </div>  

        <RightSidebar user={loggedIn}
            transactions={[]}
            banks={[{ currentBalance: 123.50 }, {currentBalance: 5000.45}]}
        
        />
     </section>
  )
}

export default Home