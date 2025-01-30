chmod +x start.sh

end() {
    read -p "Do you want to stop both the frontend and the backend? (y): " stop_response
    if [[ "$stop_response" == "y" ]]; then
        stop_services
    fi
}

stop_services() {
    if ps -p $FRONT_PID > /dev/null; then
        echo "Stopping the frontend (PID: $FRONT_PID)..."
        kill $FRONT_PID
    fi

    if ps -p $BACK_PID > /dev/null; then
        echo "Stopping the backend (PID: $BACK_PID)..."
        kill $BACK_PID
    fi
    echo "Both frontend and backend have been stopped."
}

# Run the backend
Starting the backend..."
./startback.sh &
BACK_PID=$!
sleep 5

# Run the frontend
echo "Starting the frontend..."
./startfront.sh &
FRONT_PID=$!
sleep 5

# Open Page in default browser
echo "Opening Page in the browser..."
if command -v xdg-open > /dev/null; then
    xdg-open "http://localhost:5173/"
elif command -v gnome-open > /dev/null; then
    gnome-open "http://localhost:5173/"
elif command -v open > /dev/null; then
    open "http://localhost:5173/"
else
    echo "The browser could not be opened automatically. Open "http://localhost:5173/" manually."
fi

sleep 5

end;

# Wait for both scripts to finish
wait $FRONT_PID
echo "The frontend is finished."

wait $BACK_PID
echo "The backend is finished."

echo "Both services have ended."

sleep 5
