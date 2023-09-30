# Financial-assist-chatbot 

A Financial Advisor landing page with a chatbot

## Description 🌱
This project is a financial Advisor landing page with a chatbot that is trained to provide answers to limited financial questions frequently asked. This project shows the combination of front-end web development with the python flask framework.

## Technology Stack 🪣
- **Front-end** - HTML, CSS
- **Python Frameworks** - Flask
- **Python Library** - PyTorch, NLTK
- **Programming Languages** - Python, JavaScript

## Screenshots 📸
![Screenshot 2023-09-30 215743](https://github.com/anwesa-sinha/Financial-assist-chatbot/assets/110493614/708c2aa7-df81-4ff3-af91-7b2fe22ffc6d)
![Screenshot 2023-09-30 215714](https://github.com/anwesa-sinha/Financial-assist-chatbot/assets/110493614/9d06f099-ee27-4d93-a09b-a815e9c703b9)

## How to launch the website 🚀
1. Clone the repository in your device.
2. Make sure that Anaconda is install in your device.
3. Open the cloned repositor folder in your command prompt and install the following framework and library
  1. Install the Flask framework through your terminal
    ```
    conda install -c anaconda flask
    ```
  2. Activate the Flask environment
     ```
     . venv/bin/activate
     ```
  3. Install the PyTorch library
     ```
     conda install -c pytorch pytorch
     ```
  4. Install NLTK toolkit
     ```
     conda install -c anaconda nltk
     ```
  5. After NLTK download, type ```python``` to access the python terminal
  6. After going into the python terminal import the NLTK toolkit
     ```
     import nltk
     ```
     ```
     nltk.download('punkt')
     ```
  7. Close the python terminal and go back to the cloned repository directory in the terminal and train the chatbot
     ```
     python train.py
     ```
  8. Finally launch the website
     ```
     python app.py
     ```
