import React from 'react'


const clientData = [
    {
        name: 'TitleA',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png'
    },
    {
        name: 'TitleB',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png'
    },
    {
        name: 'TitleC',
        image: 'https://logos-download.com/wp-content/uploads/2016/03/Pepsi_Logo_2014.png'
    },
    {
        name: 'TitleD',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png'
    },
]
export default function TestimonialsSection() {
    return (
        <section className="test-section">

            <div className="test-container">
                <h1>Testimonials</h1>
            </div>

            <div className="clients-container">
                {/* <h1>Our Past Clients</h1> */}

                <div className="card-container">
                    {clientData.map((data) => {
                        return(
                            <div className="client-card" key={data.name}>
                                <div className="client-card-img" style={{backgroundImage: 'url('+ data.image + ')'}}></div>
                                <hr />
                                <h2>{data.name}</h2>
                            </div>
                        )
                    })}
                </div>

                <div className="card-container">
                    {clientData.map((data) => {
                        return(
                            <div className="client-card" key={data.name}>
                                <div className="client-card-img" style={{backgroundImage: 'url('+ data.image + ')'}}></div>
                                <hr />
                                <h2>{data.name}</h2>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}
