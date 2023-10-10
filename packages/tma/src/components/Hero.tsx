import { Container, Text, Button, Group } from '@mantine/core'
import { useTonConnectUI } from "@tonconnect/ui-react"
import classes from './Hero.module.css'

export function Hero() {
  const [tonConnectUi] = useTonConnectUI()
  
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          We invite you to take part in
          <Text variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
          NFT crossing </Text> - similar to bookcrossing.
        </h1>

        <Text className={classes.description} color="dimmed">
          BookCrossing is defined as "the practice of leaving a book in a public place to be picked up and read by others, who then do likewise."
          The "crossing" or exchanging of books may take any of a number of forms, including wild-releasing books in public, direct swaps with other members of the websites, or "book rings" in which books travel in a set order to participants who want to read a certain book.
        </Text>

        <Group className={classes.controls}>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
            onClick={() => tonConnectUi.connectWallet()}
          >
            Connect wallet
          </Button>
        </Group>
      </Container>
    </div>
  );
}