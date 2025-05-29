#!/bin/bash
cd /home/kavia/workspace/code-generation/arteclipse-27298-9065a63c/arteclipse
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

