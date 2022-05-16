import requests

while True:
    # user input
    pokemon = input("Which pokemon do you want to find?") 
    pokemon = pokemon.lower() 

    # dynamic url
    url = f"https://pokeapi.co/api/v2/pokemon/{pokemon}"

    # fetching the data from url
    req = requests.get(url)
    if req.status_code == 200:

        # converting the data into adictionary
        data = req.json()

        # printing the pokemon data
        print(f"Name is\t\t{data['name']}")
        print("Abilities:")
        for ability in data['abilities']:
            print(ability['ability']['name'])

    else:
        print("Pokemon not found")