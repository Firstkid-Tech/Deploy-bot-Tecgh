```python
@app.route('/robots', methods=['GET', 'POST'])
def manage_robots():
    if request.method == 'POST':
        # Code pour créer ou configurer un robot
        bot_name = request.form['bot-name']
        bot_function = request.form['bot-function']
        # Stockez les informations du robot dans une base de données
        return jsonify({'message': f'Robot {bot_name} créé avec succès !'})
    return render_template('robots.html')
```

#### b. **Front-end (HTML et JavaScript)**
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestion des Robots</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Gestion des Robots</h1>
    </header>
    <section id="manage-robots">
        <h2>Créer un Nouveau Robot :</h2>
        <form id="robot-form">
            <label for="bot-name">Nom du Robot:</label>
            <input type="text" id="bot-name" name="bot-name" required>
            <label for="bot-function">Fonction du Robot:</label>
