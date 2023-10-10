import { useState } from 'react'
import { SimpleGrid, Card, Image, Text, Group, Button, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import classes from './NftsList.module.css'
import { useWebApp } from '../hooks/useWebApp.ts'
import { useTonConnect } from '../hooks/useTonConnect'
import { Nft } from '../hooks/useTonApi'
import { contractProps } from '../settings.ts'

interface ModalProps {
  title: string;
  address: string;
  amount: number;
  forward: number;
  text: string;
}

interface NftsListProps {
  nfts: Array<Nft>;
  buttons: boolean;
}

export function NftsList({nfts, buttons} : NftsListProps) {
  const { webApp, isWebApp } = useWebApp()
  const { sender } = useTonConnect()
  const [opened, { open, close }] = useDisclosure(false)
  const [modal, setModal] = useState({
    title: 'Init',
    address: '',
    amount: 0,
    forward: 0,
    text: ''
  })

  const send = (nftAddress : string, donate : boolean) => {
    const amount = donate ? contractProps.donate.amount : contractProps.swap.amount
    const amountTxt = amount * 0.000000001
    const mp : ModalProps = {
      title: donate ? 'Donate' : 'Swap',
      address: nftAddress,
      amount: amount,
      forward: donate ? contractProps.donate.forward : contractProps.swap.forward,
      text: 'From your balance, '+ amountTxt +' TON will be deducted. After paying the fee, most of it will be returned as change.'
    }
    if (isWebApp) {      
      webApp.showConfirm(mp.text, ok => {
        if (ok) sender.nftTransfer(mp.address, mp.amount, mp.forward)
      })
    } else {
      setModal(mp)
      open()
    }
  }

  const cards = nfts.map((nft) => (
    <Card key={nft.address} withBorder radius="md" className={classes.card}>
        <Card.Section className={classes.imageSection}>
        <Image src={nft.previewUrl} />
        </Card.Section>

        <Group justify="space-between" mt="md">
        <div>
            <Text fw={500}>{nft.name}</Text>
            <Text fz="xs" c="dimmed">
            {nft.collectionName}
            </Text>
        </div>
        </Group>

        {buttons ? (
        <Card.Section className={classes.section}>
        <Group gap={30}>
            <Button 
              radius="xl" 
              style={{ flex: 1 }} 
              color="gray"
              onClick={() => { send(nft.address, true) }
              }
            >
            Donate
            </Button>
            <Button 
              radius="xl" 
              style={{ flex: 1 }} 
              onClick={() => { send(nft.address, false) }}
            >
            Swap!
            </Button>
        </Group>
        </Card.Section>
        ): ( <></> ) }
    </Card>
  ));

  return (
    <>
      <Modal opened={opened} onClose={close} title={modal.title} centered size="100%">
        {modal.text}
        <Group mt="xl">
          <Button variant="outline" onClick={close}>
            Cancel
          </Button>
          <Button onClick={() => {
                  sender.nftTransfer(modal.address, modal.amount, modal.forward)
                  close()
                }
              }
            >
            Submit
          </Button>
        </Group>
      </Modal>
      <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="md">{cards}</SimpleGrid>
    </>
  );
}