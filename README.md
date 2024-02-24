# video-sharing-api

Endpoints
Video App
Comments

    Endpoint: localhost:8080/api/comments

    Method: POST

    Description: Adiciona um comentário a um vídeo.

    Body:

    json

    {
        "desc": "comentário 2",
        "videoId": "65d9cad0063d301432bd18b1"
    }

    Headers:
        Content-Type: application/json

    Authentication: N/A

Get All Comments

    Endpoint: localhost:8080/api/comments/65d9cad0063d301432bd18b1

    Method: GET

    Description: Obtém todos os comentários de um vídeo específico.

    Headers:
        Content-Type: application/json

    Authentication: N/A

Videos
Add Video

    Endpoint: localhost:8080/api/videos

    Method: POST

    Description: Adiciona um vídeo.

    Body:

    json

    {
        "title": "The legend of zelda Majora's mask",
        "desc": "Game plays",
        "imgUrl": "link2",
        "videoUrl": "videoLink2"
    }

    Headers:
        Content-Type: application/json

    Authentication: N/A

Get Subscribed Videos

    Endpoint: localhost:8080/api/videos/sub

    Method: GET

    Description: Obtém vídeos aos quais o usuário está inscrito.

    Headers:
        Content-Type: application/json

    Authentication: N/A

Get Video by ID

    Endpoint: localhost:8080/api/videos/find/65d9cad0063d301432bd18b1

    Method: GET

    Description: Obtém um vídeo pelo ID.

    Headers:
        Content-Type: application/json

    Authentication: N/A

Get Videos by Tags

    Endpoint: localhost:8080/api/videos/tags?tags=games

    Method: GET

    Description: Obtém vídeos com base em tags.

    Headers:
        Content-Type: application/json

    Authentication: N/A

Get Videos by Query

    Endpoint: localhost:8080/api/videos/search?q=jo

    Method: GET

    Description: Obtém vídeos com base em uma consulta.

    Headers:
        Content-Type: application/json

    Authentication: N/A

Get Random Videos

    Endpoint: localhost:8080/api/videos/random

    Method: GET

    Description: Obtém vídeos aleatórios.

    Headers:
        Content-Type: application/json

    Authentication: N/A

User/Channel
Update User

    Endpoint: localhost:8080/api/users/65d53e508d7f2d4ef6d1b7f4

    Method: PUT

    Description: Atualiza os detalhes do usuário.

    Body:

    json

    {
        "name": "Ednaldo"
    }

    Headers:
        Content-Type: application/json

    Authentication: N/A

Like Video

    Endpoint: localhost:8080/api/users/like/65d9cad0063d301432bd18b1

    Method: PUT

    Description: Dá like em um vídeo.

    Headers:
        Content-Type: application/json

    Authentication: N/A

Dislike Video

    Endpoint: localhost:8080/api/users/dislike/65d9cad0063d301432bd18b1

    Method: PUT

    Description: Dá dislike em um vídeo.

    Headers:
        Content-Type: application/json

    Authentication: N/A

Get User

    Endpoint: localhost:8080/api/users/find/65d53e508d7f2d4ef6d1b7f4

    Method: GET

    Description: Obtém detalhes do usuário.

    Headers:
        Content-Type: application/json

    Authentication: N/A

Get All Users

    Endpoint: localhost:8080/api/users/getall

    Method: GET

    Description: Obtém todos os usuários.

    Headers:
        Content-Type: application/json

    Authentication: N/A

Inscrever em um Canal

    Endpoint: localhost:8080/api/users/sub/65da2ec8a69b3c23db389f79

    Method: PUT

    Description: Inscreve um usuário em um canal.

    Headers:
        Content-Type: application/json

    Authentication: N/A

Delete User

    Endpoint: localhost:8080/api/users/65d53e508d7f2d4ef6d1b7f4

    Method: DELETE

    Description: Deleta um usuário.

    Headers:
        Content-Type: application/json

    Authentication: N/A

Auth
Signup

    Endpoint: localhost:8080/api/auth/signup

    Method: POST

    Description: Cria uma nova conta de usuário.

    Body:

    json

    {
        "name": "Alanzoka",
        "email": "alanzoka@gmail.com",
        "password": "123456"
    }

    Headers:
        Content-Type: application/json

    Authentication: N/A

Signin

    Endpoint: localhost:8080/api/auth/signin

    Method: POST

    Description: Autentica o usuário.

    Body:

    json

{
    "name": "user",
    "password": "senha"
}

Headers:

    Content-Type: application/json

Authentication: N/A
