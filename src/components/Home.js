import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
    return (
        <Container>
           
            <Section
                title="Model S"
                description="Order Online for Touchless Drivery"
                backgroundImg="model-s.jpg"
                LeftBtnText="Custom Order"
                RightBtnText="Existing iventory"
            />
            <Section
               title="Model Y"
                description="Order Online for Touchless Drivery"
                backgroundImg="model-y.jpg"
                LeftBtnText="Custom Order"
                RightBtnText="Existing iventory"  
            />
            <Section
                  title="Model 3"
                description="Order Online for Touchless Drivery"
                backgroundImg="model-3.jpg"
                LeftBtnText="Custom Oreder"
                RightBtnText="Existing iventory"
            />
            <Section 
                 title="Model X"
                description="Order Online for Touchless Drivery"
                backgroundImg="model-x.jpg"
                LeftBtnText="Custom Oreder"
                RightBtnText="Existing iventory"
            />
             <Section 
                 title="Lowest Cost Solar Panel"
                description="Money-back gaurantee"
                backgroundImg="solar-panel.jpg"
                LeftBtnText="Order Now"
                RightBtnText="Learn More"
            />
               <Section 
                 title="Solar for New Roofs"
                description="Solar Roof costs less than a New Roof"
                backgroundImg="solar-roof.jpg"
                LeftBtnText="Order Now"
                RightBtnText="Learn More"
            />
            <Section 
                 title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                LeftBtnText="Shop Now"
              
            />


        </Container>
        
    )
}
const Container=styled.div`
height:100vh;
`
export default Home
