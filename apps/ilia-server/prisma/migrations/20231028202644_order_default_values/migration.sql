/*
  Warnings:

  - The values [PENDING,SHIPPED,DELIVERED,CANCELED] on the enum `OrderStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [CREDIT_CARD,CASH,OTHER] on the enum `PaymentMethod` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `customerId` on the `Order` table. All the data in the column will be lost.
  - Added the required column `customerEmail` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "OrderStatus_new" AS ENUM ('pending', 'shipped', 'delivered', 'canceled');
ALTER TABLE "Order" ALTER COLUMN "status" TYPE "OrderStatus_new" USING ("status"::text::"OrderStatus_new");
ALTER TYPE "OrderStatus" RENAME TO "OrderStatus_old";
ALTER TYPE "OrderStatus_new" RENAME TO "OrderStatus";
DROP TYPE "OrderStatus_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "PaymentMethod_new" AS ENUM ('credit_card', 'cash', 'other');
ALTER TABLE "Order" ALTER COLUMN "paymentMethod" TYPE "PaymentMethod_new" USING ("paymentMethod"::text::"PaymentMethod_new");
ALTER TYPE "PaymentMethod" RENAME TO "PaymentMethod_old";
ALTER TYPE "PaymentMethod_new" RENAME TO "PaymentMethod";
DROP TYPE "PaymentMethod_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_customerId_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "customerId",
ADD COLUMN     "customerEmail" TEXT NOT NULL,
ALTER COLUMN "paymentMethod" SET DEFAULT 'credit_card',
ALTER COLUMN "status" SET DEFAULT 'pending',
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_customerEmail_fkey" FOREIGN KEY ("customerEmail") REFERENCES "Customer"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
