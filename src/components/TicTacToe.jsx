import React, { useState } from 'react';
import { Box, Button, Grid, GridItem, Text } from '@chakra-ui/react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index) => (
    <Button onClick={() => handleClick(index)} size="lg" p={7}>
      {board[index]}
    </Button>
  );

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <Box textAlign="center">
      <Text fontSize="2xl" mb={4}>{winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`}</Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={2}>
        {Array.from({ length: 9 }).map((_, index) => (
          <GridItem key={index}>{renderSquare(index)}</GridItem>
        ))}
      </Grid>
      <Button mt={4} colorScheme="blue" onClick={resetGame}>Reset Game</Button>
    </Box>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[b] === squares[a] && squares[c] === squares[a]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;