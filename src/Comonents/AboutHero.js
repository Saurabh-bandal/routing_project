import React from 'react'

const AboutHero = () => {
    return (
        <div class="decorative-background">

            <div class="container about-container">
                <h1 class="about-title">About Us</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/H">Home</a></li>
                        <li class="breadcrumb-item"><a href="/SevicesHero">Pages</a></li>
                        <li class="breadcrumb-item active" aria-current="page">About</li>
                    </ol>
                </nav>
            </div>
        </div>
    )
}

export default AboutHero;
