-- Insert data into Product table
INSERT INTO "Product"(name, category, amount, price) VALUES
  ('Laptop', 'Electronics', 5, 1200.00),
  ('T-shirt', 'Clothing', 10, 25.00),
  ('The Great Gatsby', 'Books', 20, 15.50),
  ('Football', 'Sports', 15, 12.00),
  ('Apples', 'Food', 50, 2.50),
  ('Notebook', 'Misc', 30, 5.00);

-- Insert data into Customer table
INSERT INTO "Customer"("firstName", "middleName", "lastName", email, "birthDate") VALUES
  ('John', NULL, 'Doe', 'john@example.com', '1990-05-15'),
  ('Jane', 'A', 'Smith', 'jane@example.com', '1988-12-28'),
  ('Michael', 'B', 'Johnson', 'michael@example.com', '1995-08-03');

-- Insert data into Employee table
INSERT INTO "Employee"("firstName", "middleName", "lastName", "position") VALUES
  ('Alice', 'C', 'Brown', 'Manager'),
  ('David', 'D', 'Williams', 'Salesperson'),
  ('Emily', NULL, 'Miller', 'Assistant');

-- Insert data into Order table
INSERT INTO "Order"("employeeId", "customerId", "orderAddress", "deliveryCost") VALUES
  (1, 1, '123 Main St', 10.00),
  (2, 2, '456 Oak Ave', 8.50),
  (3, 3, '789 Elm Rd', 12.00);

-- Insert data into OrderProduct table
INSERT INTO "OrderProduct" ("orderId", "productId", "productAmount") VALUES
  (1, 1, 2),
  (1, 3, 1),
  (2, 2, 3),
  (3, 4, 2),
  (3, 5, 5);
