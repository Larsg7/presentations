export const SPECS = [
  `/profile:
  get:
    summary: 'Get full profile by id'
    tags:
      - profile
    parameters:
      - name: profileId
        in: path
        required: true
        description: 'The profile id'
        schema:
          type: string
    operationId: getProfileById
    responses:
      '200':
        description: successful operation
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Profile'`,
  `/games:
    get:
      summary: ''
      tags:
        - games
      description: ''
      parameters: []
      operationId: getAllGames
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Game'`,
  `/games
  post:
    summary: 'Bet on a given game'
    tags:
      - games
    parameters:
      - name: gameId
        in: path
        required: true
        description: 'The game id to bet on'
        schema:
          type: string
    operationId: betOnGameById
    requestBody:
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/BetRequest'
    responses:
      '200':
        description: successful operation
        content: {}`,
  `Profile:
  type: object
  properties:
    profileId:
      type: number
    name:
      type: string
    wallet:
      type: number
      
      
      
      `,
  `Game:
  type: object
  properties:
    gameId:
      type: number
    name:
      type: string
    done:
      type: boolean
    optionA:
      type: string
    optionB:
      type: string`,
];
