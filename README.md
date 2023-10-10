[🇷🇺 Русская версия](#русская-версия) [🏴󠁧󠁢󠁥󠁮󠁧󠁿 English version (ChatGPT)](#english-version)

# NFT Crossing
## English version
The application implements NFT crossing functionality, similar to book crossing. The repository contains the complete code of the application for random exchange of NFTs on the TON network.

> BookCrossing is a hobby and social movement that operates on the principles of social networks and is similar to a flash mob. A person who has read a book leaves ("releases") it in a public place such as a park, cafe, train, library, or subway station, so that another random person can find and read the book. It is expected that the person who finds the book will do the same. The tracking of a book's journey is done through special online services.

The repository is divided into two parts (packages): the client-side and the "server-side" (smart contract creation).

### Server-Side (Smart Contract)
* Located in the package @nft-crossing/ton.
* Instructions for building the package can be found at the following link: https://github.com/nft-crossing/nft-crossing/tree/main/packages/ton
* Technologies used: FunC (Blueprint - https://github.com/ton-org/blueprint)
* After deploying the smart contract, its address should be added to the client's settings.

### Client-Side
* Located in the package @nft-crossing/tma.
* Instructions for building the package can be found at the following link: https://github.com/nft-crossing/nft-crossing/tree/main/packages/tma
* For a more detailed understanding, you can refer to the tutorial: https://ton-community.github.io/tutorials/03-client/
* Technologies used: React, Tonconnect (https://github.com/ton-connect/sdk), Tonapi (https://docs.tonconsole.com/tonapi/api-v2)"

### Demo
* Telegram mini app: https://t.me/Nft_crossing_bot/App
* dApp with Web3 TON auth: https://nft-crossing.github.io/

### Contacts
* Telegram channel: https://t.me/nft_crossing
* Github source: https://github.com/nft-crossing/nft-crossing

## Русская версия
Приложение реализует функционал NFT кроссинг - по аналогии с буккроссингом.
Репозиторий содержит полный код приложения для случайного обмена NFT в сети TON. 

> Буккро́ссинг (англ. BookCrossing), раздача книг, книгообмен или книговоро́т  хобби и общественное движение, действующее по принципу социальных сетей и близкое к флешмобу. Человек, прочитав книгу, оставляет («освобождает») её в общественном месте (парк, кафе, поезд, библиотека, станция метро), для того, чтобы другой, случайный человек мог эту книгу найти и прочитать; предполагается, что тот, в свою очередь, повторит это действие. Слежение за «путешествием» книги осуществляется через специальные сервисы в Интернете. 

Репозиторий разделен на две части (packages): клиентскую и "серверную" (создание смарт-контракта)

### Серверная часть (смарт-контракт)
* Содержиться в пакете @nft-crossing/ton
* Инструкция по сборке пакета, находится по ссылке https://github.com/nft-crossing/nft-crossing/tree/main/packages/ton
* Технологии: FunC (Blueprint - https://github.com/ton-org/blueprint)
* После деплоя смарт-контракта, необходимо внести его адрес в настройки клиента

### Клиентская часть
* Содержиться в пакете @nft-crossing/tma 
* Инструкция по сборке пакета, находится по ссылке https://github.com/nft-crossing/nft-crossing/tree/main/packages/tma
* Для более подробного понимания, можно воспользоваться туториалом https://ton-community.github.io/tutorials/03-client/
* Технологии: React, Tonconnect (https://github.com/ton-connect/sdk), Tonapi (https://docs.tonconsole.com/tonapi/api-v2)


### Демо
* Telegram mini app: https://t.me/Nft_crossing_bot/App
* dApp with Web3 TON auth: https://nft-crossing.github.io/

### Контакты
* Telegram channel: https://t.me/nft_crossing
* Github source: https://github.com/nft-crossing/nft-crossing