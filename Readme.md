Secret Reconstruction using Lagrange Interpolation

This project reconstructs the constant term C of a polynomial from encoded points provided in a JSON file.
Each point contains a value in a specific number base, which is converted to BigInt and used to compute the constant using Lagrange interpolation.

How to Run
node solution.js test1.json


or

node solution.js test2.json

What the Program Does

Reads the JSON file (test1.json/test2.json)

Extracts points (x, y)

Converts each value from its given base to a BigInt

Sorts points numerically by x

Selects the first k points

Applies Lagrange interpolation to recover the constant term of the polynomial

Prints the constant C

JSON Input Format
{
  "keys": {
    "n": <total_points>,
    "k": <points_required>
  },
  "1": { "base": "10", "value": "123" },
  "2": { "base": "2", "value": "1101" },
  "3": { "base": "16", "value": "1af" }
}


"keys" contains:

n → total number of points

k → number of points needed

Each numbered key ("1", "2", "3", …) represents a point

Example Output
Constant C: -6290016743746460859

Files Included

solution.js – Main logic

test1.json – Sample test data

test2.json – Sample test data

README.md – Project documentation

Purpose

This script helps decode secret-shared polynomial values where data is stored in different number bases, commonly used in cryptographic secret-sharing or reconstruction tasks.