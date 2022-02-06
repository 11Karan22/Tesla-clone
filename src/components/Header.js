import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {

    const [BurgerStatus,setBurgerStatus]=useState(false);
    const cars=useSelector(selectCars);
    console.log(cars);
    return (
      <Contianer>
      <a>
          <img src="/images/logo.svg "  alt= "hey!"/>
          </a>
          <Menu>
          {cars && cars.map((car,index)=>(
           <p> <a key={index} href="#">{car}</a></p>
          ))}
          </Menu>
          <RightMenu>
              <a href="#">Shop</a>
              <a href="#">Tesla Account</a>
              <CustomMenu onClick={()=>{setBurgerStatus(true)}}/>
          </RightMenu>
          <BurgerNav show={BurgerStatus}>
          <CloseWrapper>

          <CustomClose onClick={()=>{setBurgerStatus(false)}}/>
          </CloseWrapper>

          {cars && cars.map((car,index)=>(
            <li key={index}><a href="#">{car}</a></li>
          ))}
          <li><a href="#">Existing Inventory</a></li>
              <li><a href="#">Used Inventory</a></li>
              <li><a href="#">Trade-in</a></li>
              <li><a href="#">Cybertruck</a></li>
              
         
           

          </BurgerNav>
      </Contianer>
    )
}
