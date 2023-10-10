import { Container, Text} from '@mantine/core';
import { TonConnectButton } from '@tonconnect/ui-react'
import classes from './Header.module.css'
import { LogoRounded } from './LogoRounded'


export function Header() {
  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <div className={classes.logo}>
            <LogoRounded size={28}/>
            <Text
            size="xl"
            fw={900}
            variant="gradient"
            gradient={{ from: 'blue', to: 'green', deg: 92 }}
            className={classes.txt}
            >
            TON Crossing
            </Text>
        </div>
        <TonConnectButton />
      </Container>
    </header>
  );
}