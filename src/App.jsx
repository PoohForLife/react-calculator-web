import { Box, TextField, Button, Typography, Input } from "@mui/material"
import React from "react"
import { useState } from "react"

function App() {
  const styleButton = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#454545',
    '&:hover': {
      backgroundColor: 'rgba(69, 69, 69, 0.5)',
      color: 'white',
    }
  }

  const styleButtonOperator = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#FF6000',
    '&:hover': {
      backgroundColor: 'rgba(255, 96, 0, 0.5)',
      color: 'white',
    }
  }

  const styleButtonText = {
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
  }

  const styleParentBox = {
    backgroundColor: "#303030",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  }

  const styleMainBox = {
    display: "flex",
    flexDirection: "column",
    p: 1,
    border: "0.5px solid black",
    borderRadius: "10px",
    backgroundColor: "#191919",
  }
  
  const styleNumpadBox = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    p: 2,
    gap: 2,
  }

  const styleDisplayBox = {
    height: '50px',
    p: 2,
  }

  const styleDisplayTextField = {
    color: 'white',
    fontSize: '40px',
    fontWeight: 'bold',
    textAlign: 'right',
  }

  const [mainNumber, setMainNumber] = useState('');
  const [subNumber, setSubNumber] = useState('');
  const [operatorInQueue, setOperatorInQueue] = useState('');
  const onClickNumber = (number) => {
    if (subNumber === '' && operatorInQueue !== '') {
      setSubNumber(mainNumber);
      setMainNumber(number);
    } else if (number == '.' && mainNumber.includes('.')) {
      return;
    } else {
      setMainNumber(mainNumber.concat(number));
    }
  }
  const onClickOperatorDelete = () => {
    if (mainNumber.length === 0) {
      setOperatorInQueue('');
      setSubNumber('');
    } else {
      setMainNumber(mainNumber.slice(0, -1));
    }
  }
  const onClickOperatorPlus = () => {
    setOperatorInQueue('+');
  }
  const onClickOperatorMinus = () => {
    setOperatorInQueue('-');
  }
  const onClickOperatorMultiply = () => {
    setOperatorInQueue('*');
  }
  const onClickOperatorDivide = () => {
    setOperatorInQueue('/');
  }
  const onClickOperatorEqual = () => {
    if (mainNumber === '' || subNumber === '') {
      return;
    }
    switch (operatorInQueue) {
      case '+':
        setMainNumber((parseFloat(subNumber) + parseFloat(mainNumber)).toString());
        setSubNumber('');
        setOperatorInQueue('');
        break;
      case '-':
        setMainNumber((parseFloat(subNumber) - parseFloat(mainNumber)).toString());
        setSubNumber('');
        setOperatorInQueue('');
        break;
      case '*':
        setMainNumber((parseFloat(subNumber) * parseFloat(mainNumber)).toString());
        setSubNumber('');
        setOperatorInQueue('');
        break;
      case '/':
        setMainNumber((parseFloat(subNumber) / parseFloat(mainNumber)).toString());
        setSubNumber('');
        setOperatorInQueue('');
        break;
    }
  }

  return (
    <Box sx={styleParentBox}>
      <Box sx={styleMainBox}>
        <Box sx={styleDisplayBox}>
          <Typography sx={styleDisplayTextField}>{mainNumber}</Typography>
        </Box>
        <Box sx={styleNumpadBox}>
          <Button sx={styleButtonOperator} onClick={() => onClickOperatorPlus()}><Typography sx={styleButtonText}>+</Typography></Button>
          <Button sx={styleButton} onClick={() => onClickNumber('7')}><Typography sx={styleButtonText}>7</Typography></Button>
          <Button sx={styleButton} onClick={() => onClickNumber('8')}><Typography sx={styleButtonText}>8</Typography></Button>
          <Button sx={styleButton} onClick={() => onClickNumber('9')}><Typography sx={styleButtonText}>9</Typography></Button>
          <Button sx={styleButtonOperator} onClick={() => onClickOperatorMinus()}><Typography sx={styleButtonText}>-</Typography></Button>
          <Button sx={styleButton} onClick={() => onClickNumber('4')}><Typography sx={styleButtonText}>4</Typography></Button>
          <Button sx={styleButton} onClick={() => onClickNumber('5')}><Typography sx={styleButtonText}>5</Typography></Button>
          <Button sx={styleButton} onClick={() => onClickNumber('6')}><Typography sx={styleButtonText}>6</Typography></Button>
          <Button sx={styleButtonOperator} onClick={() => onClickOperatorMultiply()}><Typography sx={styleButtonText}>*</Typography></Button>
          <Button sx={styleButton} onClick={() => onClickNumber('1')}><Typography sx={styleButtonText}>1</Typography></Button>
          <Button sx={styleButton} onClick={() => onClickNumber('2')}><Typography sx={styleButtonText}>2</Typography></Button>
          <Button sx={styleButton} onClick={() => onClickNumber('3')}><Typography sx={styleButtonText}>3</Typography></Button>
          <Button sx={styleButtonOperator} onClick={() => onClickOperatorDivide()}><Typography sx={styleButtonText}>/</Typography></Button>
          <Button sx={styleButton} onClick={() => onClickNumber('0')}><Typography sx={styleButtonText}>0</Typography></Button>
          <Button sx={styleButton} onClick={() => onClickNumber('.')}><Typography sx={styleButtonText}>.</Typography></Button>
          <Button sx={styleButtonOperator} onClick={() => onClickOperatorEqual()}><Typography sx={styleButtonText}>=</Typography></Button>
          <Button sx={styleButtonOperator} onClick={() => onClickOperatorDelete()}><Typography sx={styleButtonText}>c</Typography></Button>
        </Box>
      </Box>
    </Box>
  )
}

export default App
