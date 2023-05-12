import React from 'react'

const App = () => {
  const data = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
    },
    {
      "id": 2,
      "name": "Ervin Hohgfhgfghfghell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "phone": "493-170-9623 x156",
    },
  ]
  return (
    <div>
      {
        data.map((n) => {
          return <div>
            <div className='font-serif font-bold 	font-weight: 900 text-center '>

              <h1 className='	text-cyan-500'>{n.email}</h1>
              <br />
              <h2 className='text-fuchsia-950'>{n.id}</h2>
              <h3 className='font-extrabold'>{n.name}</h3>
              <h4>{n.phone}</h4>
              <h5>{n.username}</h5>
              <h6>{n.website}</h6>
            </div>
          </div>

        })



      }



    </div>
  )
}

export default App
