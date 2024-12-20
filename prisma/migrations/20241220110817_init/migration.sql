-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `inStock` INTEGER NOT NULL,
    `size` VARCHAR(191) NULL,
    `color` VARCHAR(191) NULL,
    `material` VARCHAR(191) NULL,
    `imageURL1` VARCHAR(191) NULL,
    `imageURL2` VARCHAR(191) NULL,
    `imageURL3` VARCHAR(191) NULL,
    `imageURL4` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
